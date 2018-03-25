import {getLoggerForFile} from "../util/loggerUtil";
import {tokenRequiresMiddleware} from "../middleware/authenticateMiddleware";

export function initRoutes (app) {
    const logger = getLoggerForFile(__filename);
    logger.info(`[initRoutes]`);

    //apply auth middleware for protected routes
    require("./protected/index")(app, [tokenRequiresMiddleware]);
    require("./protected/twitter")(app, [tokenRequiresMiddleware]);


    require("./public/index")(app,[]);
    require("./public/signup")(app,[]);
    require("./public/signin")(app,[]);
};