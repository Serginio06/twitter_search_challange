import {getLoggerForFile, stringify} from "../util/loggerUtil";
// import {AUTH_ERROR} from "../constants/serverErrorCode";
import {getHashtagsString} from "../util/index";
const Twitter = require('twitter');
const secured = require ('./../../../../config/secured');

const logger = getLoggerForFile(__filename);

export class TwitterController {

    getTweetsByHashtags(hashTags) {

        const client = new Twitter({
            consumer_key: secured.consumer_key,
            consumer_secret: secured.consumer_secret,
            access_token_key: secured.access_token_key,
            access_token_secret: secured.access_token_secret
        });

        const _hashTags = getHashtagsString(hashTags);
        const params = {q: _hashTags};

        return client.get('search/tweets', params);

    }
}


