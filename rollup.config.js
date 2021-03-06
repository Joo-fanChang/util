import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-minify-es';

export default {
  input: 'index.js',
  plugins: [

    resolve({
      jsnext: true,  // 该属性是指定将Node包转换为ES2015模块
      // main 和 browser 属性将使插件决定将那些文件应用到bundle中
      main: true,  // Default: true
      browser: true // Default: false
    }),
    commonjs({
    }),
    json(),
    babel({
      exclude: 'node_modules/**',  // 排除node_modules 下的文件
      runtimeHelpers: true
    }),
    minify()
  ],
  output: [{
    file: 'build/util.js',
    name:'SongPackage',
    format: 'umd'
  },{
    file: 'build/util.es.js',
    format: 'es'
  },{
    file: 'build/util.amd.js',
    format: 'amd'
  },{
    file: 'build/util.cjs.js',
    format: 'cjs'
  }]
};
