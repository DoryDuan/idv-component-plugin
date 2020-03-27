const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
    configureWebpack: {
      // provide the app's title in webpack's name field, so that
      // it can be accessed in index.html to inject the correct title.
      resolve: {
        alias: {
          '@': resolve('src')
        }
      }
    }
}