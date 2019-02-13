const webpack = require('webpack')

const PATH = require('./path')

module.exports = {
  output: {
    path: PATH.dist,
    filename: 'index.js'
  },

  resolve: {
    extensions: ['.js']
  },

  optimization: {
    minimize: true
  },

  watchOptions: {
    ignored: /node_modules/
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: PATH.source,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
