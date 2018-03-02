var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    'pageA': './src/pageA.js',
    'pageB': './src/pageB.js',
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2,
    })
  ],
};