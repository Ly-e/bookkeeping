const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bookkeeping-website/'
    : '/',
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons') //确定 icon 目录 __dirname：当前目录下
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() // 只包含 icons 目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({ extract: false }).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({ ...options, plugins: [{ removeAttrs: { atters: 'fill' } }] })).end()
    config.plugin('svg-sprite').use('svg-sprite-loader/plugin', [{ plainSprite: true }])
    config.module.rule('svg').exclude.add(dir)//其他 svg loader 排除 icons 目录
  }
}
