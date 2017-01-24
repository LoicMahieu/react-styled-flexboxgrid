
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import visualizer from 'rollup-plugin-visualizer'

const prod = process.env.NODE_ENV === 'production'
console.log('prod', prod, process.env.NODE_ENV)
const mode = prod ? 'production' : 'development'

console.log(`Creating ${mode} bundle...`)

const targets = prod ? [
  { dest: 'dist/styled-flexboxgrid.min.js', format: 'umd' }
] : [
  { dest: 'dist/styled-flexboxgrid.js', format: 'umd' },
  { dest: 'dist/styled-flexboxgrid.es.js', format: 'es' }
]

const plugins = [
  nodeResolve(),
  commonjs(),
  babel({
    babelrc: false,
    presets: [
      ['es2015', { modules: false }],
      'react'
    ],
    plugins: [
      'transform-object-rest-spread'
    ]
  })
]

if (prod) plugins.push(uglify(), visualizer({ filename: './bundle-stats.html' }))

export default {
  entry: 'src/index.js',
  moduleName: 'styled',
  external: ['react', 'styled-components'],
  exports: 'named',
  targets,
  plugins,
  globals: { react: 'React', 'styled-components': 'styled' }
}
