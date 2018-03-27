import mongoose from "mongoose";
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import connectMongo from "connect-mongo";
import helmet from "helmet";
import sanitizer from "express-sanitizer";
import mongoSantizer from "express-mongo-sanitize";
import {initRoutes} from "./routes/index";
import {configureLogger, getLoggerForFile, setRoot} from "./util/loggerUtil";
import {ModelLocator} from "./models/ModelLocator";

const log4jsConfig = require("../../../config/log4js");

setRoot(__dirname);
configureLogger(log4jsConfig);

const logger = getLoggerForFile(__filename);

const app = express();
app.use(helmet());

const config = require ("../../../config/db");

app.use(bodyParser.json({
    parameterLimit: 100000,
    limit: "5mb",
    extended: true,
}));

app.use(sanitizer());
app.use(mongoSantizer({
    replaceWith: "_",
}));

app.use(cookieParser());

app.use("/build", express.static(path.join(__dirname, "../../../build")));
app.engine("ejs", require("ejs").renderFile);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

mongoose.Promise = global.Promise;

// Creating connection to DB
const connection = mongoose.createConnection(config.dbUrl);

connection.on("error", (err) => {
    logger.error(`Connection to DB error!\n${err}`);
    console.log('Please check if mongo launched and accessible');
});

// On DB connection open - initialize session, routes and start server
connection.on("open", () => {

    // Create singleton instance of current DB connection to re-use it in DB models creation
    ModelLocator.getInstance(connection);

    // Initialize Sessions
    const MongoStore = connectMongo(session);
    const store = new MongoStore({mongooseConnection: connection});

    app.use(session({
        ...config.session,
        store,
    }));

    // Initialize routes
    initRoutes(app);

    //Start server
    app.listen(process.env.PORT || config.port, (err) => {
        if (err) {
            logger.error("Error on server start. Error: ", err.stack);
        } else {
            /* eslint-disable */
            console.info(`Server is running on port ${config.port}`);
            /* eslint-enable */
            logger.info(`Server is running on port ${config.port}`);
        }
    });
});



