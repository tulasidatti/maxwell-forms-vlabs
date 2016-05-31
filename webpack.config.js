var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache: true,
  entry: ['webpack-hot-middleware/client',
          './client/index.js'
  ],
  output : {
    path: path.join(__dirname,'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins:[
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react','react-hmre']
        }
      }
    ]
  }
};