const path = require('path')

module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            //loader: 'style-loader/url' // second
            loader: 'style-loader/useable',
          },
          {
            //loader: 'css-loader'  // first
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
};