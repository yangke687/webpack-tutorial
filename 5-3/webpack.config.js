const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/foo',
    vendor: ['react'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 'Infinity',
    }),
    /** extract webpack runtime */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),

    new webpack.NamedChunksPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};