
import webpack from 'webpack'

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/',
    './index.js'
  ],
  output: {
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    contentBase: __dirname
  }
}
