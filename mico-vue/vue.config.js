const path = require('path');
const packageName = require('./package').name;

function resolve(dir) {
  return path.join(__dirname, dir);
}

const dev = process.env.NODE_ENV === 'development'

const port = 9000; // dev port

module.exports = {
 publicPath: dev ? `//localhost:${port}` : '/',
 
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,

  devServer: {
   
    hot: true,
    historyApiFallback: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
      globalObject: 'this',
    },
  },
};


