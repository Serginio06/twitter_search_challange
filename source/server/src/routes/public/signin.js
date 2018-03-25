import {BAD_REQUEST} from "../../constants/serverErrorCode";
import {getLoggerForFile, stringify} from "../../util/loggerUtil";
// import {getSigninPayload} from "../../converter/serverEntity";
import {SigninController} from "../../controllers/SigninController";
import {validateEmail, validatePass} from "../../util/dataValidationUtil";

const logger = getLoggerForFile(__filename);
const controller = new SigninController();

module.exports = function (app, middleware) {
    app.post('/login', middleware, function (req, res, next) {
        logger.info(`[${req.identifier}][login] Attempt to login.\nRequest body: ${stringify(req.body)}`);


        // check that user is not signed in
        if (req.session && req.session.userId) {
            logger.error(`User was signed in `);

            // res.json({
            //     success: false,
            //     errorCode: BAD_REQUEST,
            // });

            res.redirect("/");

            next();
            return;

        }

        const email = req.sanitize(req.body.email);
        const password = req.sanitize(req.body.password);

        // validate data before proceed with login
        if (!email || !password || !validateEmail(email) || !validatePass(password)) {
            logger.error(`Request has a field with broken value`);
            res.json({
                success: false,
                errorCode: BAD_REQUEST,
            });

            next();
            return;
        }

        controller.login(email, password)
            .then((signinResult) => {

                req.session.userId = signinResult._id;

                res.cookie("userEmail", signinResult.email);
                res.json({
                    success: true,
                    payload: signinResult.email,
                });
            })
            .catch((err) => {
                res.json({
                    success: false,
                    errorCode: err.message,
                });
            })
    });


    app.post('/logout', middleware, function (req, res) {
        logger.info(`[logout] Attempt to logout.`);

        try {
            req.session.destroy(() => {
            });

            res.json({
                success: true,
            });
        } catch (err) {
            res.json({
                success: false,
                errorCode: err.message,
            });
        }
    })
};

// loginViaFacebook(req, res, next) {
//     logger.info(`[${req.identifier}][loginViaFacebook] Attempt to login via Facebook.\nRequest body: ${stringify(req.body)}`);
//
//     const facebookId = req.sanitize(req.body.facebookId);
//     const keepLogged = req.sanitize(req.body.keepLogged);
//
//     if (!facebookId) {
//         logger.error(`[${req.identifier}] Request has a field with broken value`);
//         res.json({
//             success: false,
//             errorCode: BAD_REQUEST,
//         });
//
//         next();
//         return;
//     }
//
//     controller.loginViaFacebook(facebookId, req.identifier)
//         .then((signinResult) => {
//             req.session.userId = signinResult.userId;
//
//             if (!keepLogged) {
//                 req.session.cookie.expires = null;
//             }
//
//             res.json({
//                 success: true,
//                 payload: getSigninPayload(signinResult),
//             });
//         })
//         .catch((err) => {
//             console.error(err);
//             res.json({
//                 success: false,
//                 errorCode: err.message,
//             });
//         })
//         .then(() => {
//             next();
//         });
// },

// recoverPass(req, res, next) {
//     logger.info(`[${req.identifier}][recoverPass] Attempt to recover password.
//         \nRequest body: ${stringify(req.body)}`);
//
//     if (!req.body || !req.body.email) {
//         logger.error(`[${req.identifier}] Request has a field with broken value`);
//         res.json({
//             success: false,
//             errorCode: BAD_REQUEST,
//         });
//
//         next();
//         return;
//     }
//
//     const email = req.sanitize(req.body.email);
//
//     return controller.recover(email, req.identifier)
//         .then(() => {
//             res.json({
//                 success: true,
//             });
//         })
//         .catch((err) => {
//             res.json({
//                 success: false,
//                 errorCode: err.message,
//             });
//         });
// },


// };
