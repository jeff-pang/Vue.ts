var webpack = require("webpack");

module.exports = {
    entry: {
        app:"./apps/main.ts",
        common:["jquery","vue"]
    },
    output: {
        filename: "main.js"
    },
    resolve: {
        extensions: [".ts","vue", ".js"],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.html$/, loader:'html-loader',
                options:{
                    transpileOnly:true
                }
            }
        ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({name:"common",  filename :"common.bundle.js"})
    ]
};