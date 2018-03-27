"use strict";

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const ExtractStylePlugin = new ExtractTextPlugin({
    filename: "./css/[name].css",
    allChunks: true,
});

let config = require("./config/db.js");

process.env.BABEL_ENV = "development";
// process.env.NODE_ENV = "dev";
// use DB_URI = "mongodb://mongo:27017/local" for docker-compose
// process.env.DB_URI = 'mongodb://127.0.0.1:27017/local';

module.exports = {
    bail: true,
    devtool: "source-map",
    watch: false,
    node: {
        fs: 'empty',
        module: 'empty'
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    devServer: {
        contentBase: "./",
        inline: true,
        hotOnly: true,
        port: 9998,
        historyApiFallback: true,
        proxy: [{
            context: "/",
            target: "http://localhost:9999/",
        }]
    },
    entry: {
        main: path.join(__dirname, "./source/client/src/index"),
        // signin: path.join(__dirname, "./source/client/src/signin/index"),
        // verify: path.join(__dirname, "./source/client/src/verify/index"),
    },
    output: {
        path: path.join(__dirname, "./build/"),
        filename: "./js/[name].js",
        chunkFilename: "./js/[name].chunk.js",
        publicPath: "/build/",
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".json", ".jsx"],
        alias: {
            "babel-runtime": path.dirname(
                require.resolve("babel-runtime/package.json")
            )
        },
    },

    module: {
        strictExportPresence: true,
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(scss|css)$/,
                        loader: ExtractStylePlugin.extract({
                            fallback: {
                                loader: "style-loader",
                            },
                            use: [
                                {
                                    loader: "css-loader",
                                    options: {
                                        sourceMap: true,
                                        minimize: true,
                                    },
                                },
                                {
                                    loader: "resolve-url-loader",
                                    options: {
                                        sourceMap: true,
                                    }
                                },
                                {
                                    loader: "sass-loader",
                                    options: {
                                        sourceMap: true,
                                        sourceMapContents: true,
                                        includePaths: ["source/client/style"]
                                    }
                                }
                            ],
                        }),
                    },
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: "file-loader",
                        options: {
                            limit: 10000,
                            name: "media/[name].[ext]",
                        },
                    },
                    {
                        test: /\.(js|jsx)$/,
                        include: path.join(__dirname, "./source/client/src"),
                        loader: "babel-loader",
                        options: {
                            babelrc: false,
                            sourceMap: true,
                            presets: [require.resolve("babel-preset-react-app")],
                            plugins: ["source-map-support"],
                            compact: true,
                        },
                    },
                    {
                        test: /\.svg$/,
                        loader: "raw-loader"
                    },
                    {
                        loader: "file-loader",
                        exclude: [/\.js$/, /\.html$/, /\.json$/],
                        options: {
                            name: "./media/[name].[ext]",
                        },
                    },
                    {
                        test: /\.woff$/,
                        loader: "url-loader?mimetype=application/font-woff&name=media/[name].[ext]"
                    },
                    {
                        test: /\.woff2$/,
                        loader: "url-loader?mimetype=application/font-woff2&name=media/[name].[ext]"
                    },
                    {
                        test: /\.otf$/,
                        loader: "url-loader?mimetype=application/octet-stream&name=media/[name].[ext]"
                    },
                    {
                        test: /\.ttf$/,
                        loader: "url-loader?mimetype=application/octet-stream&name=media/[name].[ext]"
                    },
                    {
                        test: /\.eot$/,
                        loader: "url-loader?mimetype=application/vnd.ms-fontobject&name=media/[name].[ext]"
                    },
                ],
            },
        ],
    },
    plugins: [
        ExtractStylePlugin,
        new OpenBrowserPlugin({url: "http://" + config.domain + ":" + config.port}),
    ],
};