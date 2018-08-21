
const { NODE_ENV } = process.env
const modules = NODE_ENV === 'production' ? false : 'commonjs'
const loose = true

module.exports = {
  presets: [
    ['env', { loose, modules }],
    'react'
  ],
  plugins: [
    ['transform-react-remove-prop-types', { mode: 'unsafe-wrap' }],
    'transform-object-rest-spread',
    ['transform-class-properties', { loose }]
  ],
  env: {
    emotion: {
      plugins: [
        ['transform-react-remove-prop-types', { mode: 'unsafe-wrap' }],
        'transform-object-rest-spread',
        ['transform-class-properties', { loose }],
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
