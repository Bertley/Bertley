const path = require('path'); 
const webpack = require('webpack'); 
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin"); 

module.exports = {
    devtool: 'source-map', 
    entry: {
        portfolio: './src/scripts/index.js'
    }, 
    output: {
        filename: 'app.js', 
        path: path.resolve(__dirname, 'static/scripts')
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: false,
            cleanAfterEveryBuildPatterns: ['../styles/*'],
            dangerouslyAllowCleanPatternsOutsideProject: true
        }),
        new MiniCssExtractPlugin({
            filename: '../styles/app.css',
        }), 
        new BrowserSyncPlugin({
            host: 'localhost', 
            port:  3000, 
            proxy: 'http://127.0.0.1:8000/'
        }), 
        new webpack.ProvidePlugin({
            $: 'jquery', 
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, 
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }, 
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader:'url-loader'
            } 
        ]
    }, 
    externals: {
        jquery: 'jQuery'
    }
}; 