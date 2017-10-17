
import fs from 'fs'
import path from 'path'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import visualizer from 'rollup-plugin-visualizer'

const prod = process.env.NODE_ENV === 'production'
const mode = prod ? 'production' : 'development'

console.log(`Creating ${mode} bundle...`)

const output = prod ? [
  { file: 'dist/styled-flexboxgrid.min.js', format: 'umd' }
] : [
  { file: 'dist/styled-flexboxgrid.js', format: 'umd' },
  { file: 'dist/styled-flexboxgrid.es.js', format: 'es' }
]

const babelrc = JSON.parse(fs.readFileSync(path.join(__dirname, './.babelrc')))

const plugins = [
  nodeResolve(),
  commonjs(),
  babel(Object.assign({}, babelrc, {
    babelrc: false,
    presets: babelrc.presets.map(p => (
      p !== 'es2015'
      ? p
      : [
        'es2015',
        {
          'modules': false
        }
      ]
    )),
    plugins: babelrc.plugins.concat(['external-helpers'])
  }))
]

if (prod) plugins.push(uglify(), visualizer({ filename: './bundle-stats.html' }))

export default {
  input: 'src/index.js',
  name: 'styled',
  external: ['react', 'styled-components'],
  exports: 'named',
  output,
  plugins,
  globals: { react: 'React', 'styled-components': 'styled' }
}
