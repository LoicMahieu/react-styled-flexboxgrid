
import webpack from 'webpack'
import compact from 'lodash.compact'
import path from 'path'

const development = process.env.NODE_ENV === 'development'

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: compact([
    development && 'webpack/hot/dev-server',
    development && 'webpack-dev-server/client?http://localhost:8080/',
    './index.js'
  ]),
  output: {
    path: path.join(__dirname, '/build'),
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
