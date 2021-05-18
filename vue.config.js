const path = require('path')

function resolvePath (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolvePath('src')
      }
    }
  }
}