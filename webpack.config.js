const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "index.jsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
}