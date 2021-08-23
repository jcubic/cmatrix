import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { readFileSync } from 'fs';

const date = (new Date()).toUTCString();

const banner = readFileSync('./src/banner.js').toString().trim().replace(/\{\{DATE\}\}/, date);

export default [
  {
    input: 'src/matrix.js',
    output: {
      file: 'dist/matrix.js',
      format: 'iife',
      name: 'matrix',
      sourcemap: 'inline'
    },
    plugins: [
      babel({
        exclude:'node_modules/**',
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env']
      }),
      terser({
        ecma: 2015,
        mangle: { toplevel: false },
        format: { preamble: banner }
      })
    ]
  },
  {
    input: 'src/matrix.js',
    output: {
      file: 'dist/matrix.mjs',
      format: 'es',
      sourcemap: 'inline'
    
    },
    plugins: [
      terser({
        ecma: 2018,
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true
        },
        format: { preamble: banner }
      })
    ]
  }
];
