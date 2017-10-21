import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    entry: 'index.js',
    dest: 'build/d3-sketchy.js',
    format: 'umd',
    moduleName: 'd3',
    sourceMap: true,
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
  };