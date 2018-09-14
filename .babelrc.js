
const { NODE_ENV } = process.env
const modules = NODE_ENV === 'production' ? false : 'commonjs'
const loose = true

module.exports = {
  presets: [
    ['@babel/env', { loose, modules }],
    '@babel/react'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    ['@babel/plugin-proposal-class-properties', { loose }]
  ],
  env: {
    emotion: {
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        ['@babel/plugin-proposal-class-properties', { loose }],
        [
          'transform-rename-import',
          {
            original: '^styled-components$',
            replacement: 'react-emotion'
          }
        ],
        'emotion'
      ]
    }
  }
}
