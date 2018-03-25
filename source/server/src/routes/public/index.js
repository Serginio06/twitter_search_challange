module.exports = function (app) {

    // console.log("/signin fired",);

    app.get ("/signin", function (req, res) {
        res.render("./signin.ejs");
    });
};