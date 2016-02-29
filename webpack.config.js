var Promise = require('es6-promise').Promise;

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
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: { presets:['react']}},
            { test: /\.scss$/, loader: 'style!css!sass' }
        ]
    }
};