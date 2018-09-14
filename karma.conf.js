
require('@babel/register')

const webpackConfig = Object.assign({}, require('./demo/webpack.config.babel'), {
  entry: null,
  output: null,
  devtool: 'inline-source-map'
})

module.exports = function (config) {
  config.set({
    singleRun: true,

    basePath: './',

    files: [
      { pattern: 'node_modules/@babel/polyfill/browser.js', instrument: false },
      './src/**/*.test.js'
    ],

    autoWatch: true,

    frameworks: ['mocha'],

    preprocessors: {
      './src/**/*.test.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: 'dots',

    browsers: [process.env.CI ? 'PhantomJS' : 'Chrome']
  })
}
