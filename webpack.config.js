const path = require('path');
const webpack = require('webpack');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: {
        C1: ['./client/main.jsx'],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                Vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "Vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle[name].js'
    }
    ,
    devtool: 'cheap-module-source-map', //'source-map',
    plugins: [
        new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
        new UglifyJsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            test: /\.jsx?$|\.css$|\.html$/,
        })
    ],
    node: {
        fs: "empty"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {attrs: [':data-client']}
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader"
            }
        ]
    }
}
;

