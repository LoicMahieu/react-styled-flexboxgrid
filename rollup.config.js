
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import visualizer from 'rollup-plugin-visualizer'

const globals = {
  react: 'React',
  'styled-components': 'styled',
  'prop-types': 'PropTypes',
  'lodash.isinteger': '_.isInteger'
}
const name = 'react-styled-flexboxgrid'

const plugins = [
  babel({
    plugins: ['@babel/plugin-external-helpers']
  })
]

const base = {
  input: 'src/index.js',
  external: ['react', 'styled-components', 'prop-types', 'lodash.isinteger'],
  plugins
}

export default [
  Object.assign({}, base, {
    output: [
      { file: 'dist/styled-flexboxgrid.js', format: 'umd', exports: 'named', name, globals },
      { file: 'dist/styled-flexboxgrid.es.js', format: 'es', exports: 'named', name, globals }
    ]
  }),
  Object.assign({}, base, {
    output: [
      { file: 'dist/styled-flexboxgrid.min.js', format: 'umd', exports: 'named', name, globals }
    ],
    plugins: base.plugins.concat([
      uglify(),
      visualizer({ filename: './bundle-stats.html' })
    ])
  })
]
