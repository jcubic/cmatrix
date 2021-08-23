import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

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
        output: { quote_style: 1 }
      })
    ]
  },
  {
    input: 'src/matrix.js',
    output: {
      format: 'es',
      file: 'dist/matrix.mjs',
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
        output: { quote_style: 1 }
      })
    ]
  }
];
