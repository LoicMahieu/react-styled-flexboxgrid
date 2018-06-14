
import path from 'path'

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: __dirname
  }
}
