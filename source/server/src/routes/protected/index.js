

// const handler = function (req, res, next) {
//     res.render("./main.ejs");
// };
//
// module.exports = {
//     "/": handler,
//     welcome: handler,
//     password: handler,
// };


module.exports = function (app, middleware) {

    app.get('/', middleware, function (req, res) {
        res.render("./main.ejs");
    });
};