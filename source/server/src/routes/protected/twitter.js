import {getLoggerForFile, stringify} from "../../util/loggerUtil";
import {TwitterController} from "../../controllers/TwitterController";

const logger = getLoggerForFile(__filename);
const controller = new TwitterController();

module.exports = function (app, middleware) {
    app.post('/get-tweets', middleware, function (req, res, next) {
        logger.info(`[${req.identifier}][getTweets] Attempt to get tweet .\nRequest body: ${stringify(req.body)}`);


        console.log("req.body.hashtags=", req.body.hashtags);

        let hashTags = req.sanitize(req.body.hashtags);

        return controller.getTweetsByHashtags(hashTags)
            .then((payload) => {
                console.log("payload=", payload.statuses.length);

                res.json({
                    success: true,
                    payload:payload.statuses,
                });
            })
            .catch((err) => {
                res.json({
                    success: false,
                    errorCode: err.message,
                });
            })
    });
};
