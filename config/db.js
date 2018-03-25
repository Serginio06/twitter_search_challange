
// console.log("process.env.DB_URI= ",process.env.DB_URI);
const secured = require ('./secured');
// const DB_URI = process.env.DB_URI;

module.exports = {
    dbUrl: process.env.DB_URI || 'mongodb://127.0.0.1:27017/local',
    // uncomment line below to run with docker-compose
    // "dbUrl": "mongodb://mongo:27017/local",

    "domain": "localhost",

    "port": 9999,

    "session": {
        "secret": process.env.SESSION_SECRET || secured.sessionSecret,
        "cookie": {
            "maxAge": 604800000
        },
        "saveUninitialized": false,
        "resave": true
    },

    // Uncomment next line to use nodemail for password recovery
    // "mail": {
    //     "host": "smtp.gmail.com",
    //     "port": 465,
    //     "secure": true,
    //     "auth": {
    //         "type": "login",
    //         "user": "sergius.iva@gmail.com",
    //         "pass": ""
    //     }
    // }
};

// curl --request GET --url 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular' --header 'authorization: OAuth oauth_consumer_key="ZkD7I03X8p9lw4yEdqzNbNYtQ",oauth_token="323267446-In23XsomFi5aBAm49eRouvVhsxiogaQdWyvfd7TK",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1521996969",oauth_nonce="KwsxKU",oauth_version="1.0",oauth_signature="v8nvFSJP1eugyu%2BiqjL6plxtzcc%3D"'



