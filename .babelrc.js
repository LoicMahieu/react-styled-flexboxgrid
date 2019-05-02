
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
            replacements: [
              {
                original: "import { css } from 'styled-components'",
                replacement: "import { css } from '@emotion/core'"
              },
              {
                original: "import styled from 'styled-components'",
                replacement: "import styled from '@emotion/styled'"
              },
              {
                original: "import styled, { css } from 'styled-components'",
                replacement: "import styled from '@emotion/styled'\nimport { css } from '@emotion/core'"
              },
            ]
          }
        ],
        'emotion'
      ]
    }
  }
}
