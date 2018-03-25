// const config = require("../config/index");

// const handler = function (req, res, next) {
//     res.render("./signin.ejs");
// };
//
// module.exports = {
//     signin: handler,
//     signup: handler,
//     recover: handler,
// };


// const path = require("path");

module.exports = function (app) {

    // console.log("/signin fired",);

    app.get ("/signin", function (req, res) {
        res.render("./signin.ejs");
    });
};