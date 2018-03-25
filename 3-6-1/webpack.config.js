var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    'pageA': './src/pageA.js',
    //'pageB': './src/pageB.js',
    //'vendor': ['lodash']
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: './dist/'
  },

  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'common',
  //     minChunks: 2,
  //     chunks: ['pageA', 'pageB'],
  //   }),
  //   new webpack.optimize.CommonsChunkPlugin({
  //     names: ['vendor', 'manifest'],
  //     minChunks: Infinity,
  //   })
  // ],
};