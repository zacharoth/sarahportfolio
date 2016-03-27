var Promise = require('es6-promise').Promise;
var webpack = require("webpack");

module.exports = {
    entry: './page-app.js',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { exclude: /node_modules/, test: /\.js$/, loader: "babel", query: { presets:['es2015', 'react']}},
            { test: /\.(scss|css)$/, loader: 'style!css!sass' },
            { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" },
            { test: /\.jpg$/,    loader: "file-loader" },
        ]
    },
    resolve: {
        extensions: [
            '',
            '.js',
        ],
    }
};