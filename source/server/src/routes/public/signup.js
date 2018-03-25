import {BAD_REQUEST} from "../../constants/serverErrorCode";
import {getLoggerForFile, stringify} from "../../util/loggerUtil";
import {SignupController} from "../../controllers/SignupController";
import {validateEmail, validatePass} from "../../util/dataValidationUtil";

const logger = getLoggerForFile(__filename);
const controller = new SignupController();

module.exports = function (app, middleware) {
    app.post('/registerUser', middleware, function (req, res, next) {
        logger.info(`[registerUser] Attempt to register new user.\nRequest body: ${stringify(req.body)}`);

        const email = req.sanitize(req.body.email);
        const password = req.sanitize(req.body.password);

        // INFO: check fields before create new user
        if (!email || !password || !validateEmail(email) || !validatePass(password)) {
            logger.error(` Request has a field with broken value`);

            res.json({
                success: false,
                errorCode: BAD_REQUEST,
            });

            next();
            return;
        }

        controller.registerUser(email, password)
            .then((registeredUser) => {

                res.cookie("userEmail", registeredUser.email);
                req.session.userId = registeredUser._id;

                res.json({
                    success: true,
                });
            })
            .catch((err) => {
                logger.info(`[registerUser] register new user failed!
                    \n${err}`);

                res.json({
                    success: false,
                    errorCode: err.message,
                });
            })
    });


};
