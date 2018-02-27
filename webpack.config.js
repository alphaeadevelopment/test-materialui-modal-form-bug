/* eslint-disable */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const babelExclude = /node_modules/;

var config = {
  entry: path.join(__dirname, 'modal-form.jsx'),
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: babelExclude,
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'material-ui': 'material-ui',
  },
  plugins: [
  ],
}
module.exports = config
