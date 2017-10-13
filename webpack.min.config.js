var config = require('./webpack.config'),
webpack = require('webpack');

config.output.filename = 'main.min.js',
config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));

module.exports = config;