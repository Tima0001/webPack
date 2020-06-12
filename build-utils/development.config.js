const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => ({
    devtool: "chep-evel-source-map",
    module: {
        rules: [{
            test: /\.css$/,
            exclude: [/node_modules/],
            use: ["style-loader", "css-loader", "postcss-loader"],
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
    devServer: {
        port: 1717,
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        compress: true,
        noInfo: true,
        quiet: true,
        clientLogLevel: "warning",
        stats: "errors-only",
        open: true,
    },
});