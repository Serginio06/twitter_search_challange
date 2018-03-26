
// console.log("process.env.DB_URI= ",process.env.DB_URI);
// const secured = require ('./secured');
// const DB_URI = process.env.DB_URI;

const keys = require('./index');

module.exports = {
    dbUrl: process.env.DB_URI || 'mongodb://127.0.0.1:27017/local',

    // uncomment line below to run with docker-compose
    // "dbUrl": "mongodb://mongo:27017/local",

    "domain": "localhost",

    "port": 9999,

    "session": {
        "secret": keys.sessionSecret,
        "cookie": {
            "maxAge": 604800000
        },
        "saveUninitialized": false,
        "resave": true
    },

};





