const webpack = require('webpack')

module.exports = {

  devtool: 'cheap-eval-source-map',

  devServer: {
    //inline: false, /* console log frame */
    historyApiFallback: true,
    port: 9001,
    overlay: true, /** show eslint warnings */
    proxy: {
      '/': {
        target: 'https://m.weibo.cn',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/comments': '/api/comments'
        },
        headers: {
          //'Cookie': 'xxxxxxx',
        },
      }
    },
    hot: true,
    hotOnly: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]

}