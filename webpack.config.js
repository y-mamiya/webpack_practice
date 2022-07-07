const path = require('path');
//CSSファイルを生成するプラグイン
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//HTMLファイルを生成するプラグイン
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
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
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',//読み込み先
        }),
    ],
}
