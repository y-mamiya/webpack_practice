const path = require('path');
//CSSファイルを生成するプラグイン
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//HTMLファイルを生成するプラグイン
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/javascripts/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'javascripts/main.js',
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
//                        loader: 'style-loader',
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
//                test: /\.png|\.jpeg/,
                test: /\.(png|jpeg)/,
                type: 'asset/resource',//v5
                generator: {//v5
                    filename: 'images/[name][ext]',
                },
                use: [
//                     {
// //                        loader: 'url-loader',
//                         loader: 'file-loader',
//                         options: {
//                             esModule : false,
// //                            name: 'images/icon.png',
//                             name: 'images/[name].[ext]',
//                         }
//                     },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './styleseets/main.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/index.html',//読み込み先
        }),
        new CleanWebpackPlugin(),
    ],
}
