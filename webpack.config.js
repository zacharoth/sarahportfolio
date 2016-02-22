var Promise = require('es6-promise').Promise;

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: 'style!css!sass' }
        ]
    }
};