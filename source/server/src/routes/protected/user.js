import {getLoggerForFile, stringify} from "../../util/loggerUtil";
import {UserController} from "../../controllers/UserController";
import {AUTH_ERROR} from "../../constants/serverErrorCode";

const logger = getLoggerForFile(__filename);
const controller = new UserController();

module.exports = function (app,middleware) {
    app.get('/loadUserInfo', middleware, function (req, res, next) {
        logger.info(`[${req.identifier}][loadUserInfo] Attempt to load user info.\nRequest body: ${stringify(req.body)}`);

        const resolvePublic = req.body.resolvePublic;

        return controller.loadUserInfo(req.session.userId)
            .then((userInfo) => {
                res.json({
                    success: true,
                    payload: userInfo,
                });
            })
            .catch((err) => {
                if (err.message === AUTH_ERROR) {
                    if (!resolvePublic) {
                        req.session.destroy();
                    }
                }

                res.json({
                    success: false,
                    errorCode: err.message,
                });
            })
            .then(() => {
                next();
            });
    });
};
