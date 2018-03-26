import {getLoggerForFile, stringify} from "../util/loggerUtil";
// import {AUTH_ERROR} from "../constants/serverErrorCode";
import {getHashtagsString} from "../util/index";
const Twitter = require('twitter');
const keys = require ('./../../../../config/index');

const logger = getLoggerForFile(__filename);

export class TwitterController {

    getTweetsByHashtags(hashTags) {

        const client = new Twitter({
            consumer_key: keys.consumer_key,
            consumer_secret: keys.consumer_secret,
            access_token_key: keys.access_token_key,
            access_token_secret: keys.access_token_secret
        });

        const _hashTags = getHashtagsString(hashTags);
        const params = {q: _hashTags};

        return client.get('search/tweets', params);

    }
}


