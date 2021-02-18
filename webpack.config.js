const MiniCssExtractPlugin = require("mini-css-extract-plugin")
let mode = "development"
let target = "web";
if (process.env.NODE_ENV === "production") {
    mode = "production"
    // Webpack 5 bug, to ensure that the browserslist is supported
    target = "browserslist"
}
module.exports = {
    mode: mode,
    target: target,
    module: {
        rules: [
            {
                // regex to support scss/sass/css
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader", "sass-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }


        ],
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true

    }
}