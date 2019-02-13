const webpack = require('webpack')

const PATH = require('./path')

module.exports = {
  output: {
    path: PATH.build
  },

  resolve: {
    extensions: ['.js']
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
