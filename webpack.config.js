const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pug = require("pug");

console.log(__dirname);
module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [

            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: ["style-loader", "postcss-loader", "css-loader"]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                    {
                        test: /\.pug$/,
                        use: ["pug-loader"],
                        exclude: [/node_modules/],
                        pretty: true,
                    },
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                filename: "index.html",
                template: __dirname + "/src/index.html",
                inject: true
            }
        ),
    ],
    devServer: {
        port: 1717,
    }
}