const path = require("path");

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: './js/main.js',
        about: './js/about.new.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'out')
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
};