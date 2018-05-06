const webpack = require('webpack')
const htmlInlineChunkPlugin = require('html-webpack-inline-chunk-plugin')



module.exports = {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),

    new htmlInlineChunkPlugin({
      inlineChunks: ['manifest']
    })
  ]
};