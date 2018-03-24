
console.log("process.env.DB_URI= ",process.env.DB_URI);


const DB_URI = process.env.DB_URI;

module.exports = {
    dbUrl: DB_URI ? DB_URI:'mongodb://127.0.0.1:27017/local',
    // uncomment line below to run with docker-compose
    // "dbUrl": "mongodb://mongo:27017/local",

    "domain": "localhost",

    "port": 9999,

    "jwtSecret": "bd8rafdX0S2gSN__Ms_5YEcU",

    "session": {
        "secret": "mySecretKey3aa10a125evd72411076ee61d63",
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




