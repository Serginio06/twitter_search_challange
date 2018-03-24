import {configureLogger, getLoggerForFile, setRoot} from "./util/loggerUtil";
// import {configureEmail} from "./util/emailUtil";
// import cors from "cors";
import {releaseIdentifierMiddleware} from "./middleware/requestMiddleware";
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

const log4jsConfig = require("../../../config/log4js");
import {ServiceLocator} from "./util/ServiceLocator";
import {ModelLocator} from "./models/ModelLocator";

setRoot(__dirname);
configureLogger(log4jsConfig);

const logger = getLoggerForFile(__filename);

const app = express();
app.use(helmet());

const config = require ("../../../config/db");


ServiceLocator.getInstance()
    .setDomain(config.domain)
    .setPort(config.port);

// Uncomment next line to use nodemail for password recovery
// configureEmail(config.mail);

// TODO: Allow cors for dev purposes when frontend launched localhost
// app.use(cors());


app.use(bodyParser.urlencoded({
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

const connection = mongoose.createConnection(config.dbUrl);
connection.on("error", (err) => {
    logger.error(`Connection to DB error!\n${err}`);
    console.log('Please check if mongo launched and accessible');
});


connection.on("open", () => {
    ModelLocator.getInstance(connection);

    const MongoStore = connectMongo(session);
    const store = new MongoStore({mongooseConnection: connection});

    app.use(session({
        ...config.session,
        store,
    }));

    initRoutes(app);

    // Attach unique ID to every request to monitor it's way
    app.use(releaseIdentifierMiddleware);

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

