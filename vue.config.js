module.exports = {
  outputDir: '/var/www/neume-hq/public/static/',
  assetsDir: 'assets/',
  indexPath: '../index.html',
  publicPath: '/',
  runtimeCompiler: true,
  productionSourceMap: false,
  parallel: true,

  css: {
    extract: false
  },
  lintOnSave: true,
  pwa: {
    name: 'NEUME-HQ',
    msTileColor: '#B8E986',
    // workboxPluginMode: 'InjectManifest'
  },
  devServer: {
    proxy: 'http://localhost:7666'
  }
}