const keys = require('./index');

module.exports = {

    // dbUrl: process.env.DB_URI || 'mongodb://127.0.0.1:27017/local',
    dbUrl: keys.dbUrl,

    // uncomment line below to run with docker-compose
    // "dbUrl": "mongodb://mongo:27017/local",

    "domain": "localhost",

    "port": 8080,

    "session": {
        "secret": keys.sessionSecret,
        "cookie": {
            "maxAge": 604800000
        },
        "saveUninitialized": false,
        "resave": true
    },
};