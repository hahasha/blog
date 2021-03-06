const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
  },
  pluginOptions: {
  },
  devServer: {
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
      .set('pages', resolve('src/pages'))
      .set('assets', resolve('src/assets'))
  }
}
