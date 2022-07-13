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
                test: /\.(css|sass|scss)/,
                use: [
                    {
//                        loader: 'style-loader',
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
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
            {
                test: /\.pug/,
                use:[
                    {
                        loader: 'html-loader',//2こめの処理
                    },
                    {
                        loader:'pug-html-loader',//1こめの処理
                        options: {
                            pretty: true,//圧縮しなくなる
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './styleseets/main.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/index.pug',//読み込み先
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/access.pug',//読み込み先
            filename: 'access.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/members/taro.pug',//読み込み先
            filename: 'members/taro.html',
        }),
        new CleanWebpackPlugin(),
    ],
}
