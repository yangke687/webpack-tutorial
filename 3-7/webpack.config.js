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
        test: /\.less$/,
        use: [
          {
            //loader: 'style-loader/url' // second
            loader: 'style-loader',
            options: {
              //insertInto: '#app',
              singleton: true,
              transform: './css.transform.js', // css transformer
            }
          },
          {
            loader: 'css-loader', // first
            options: {
              minimize: true,
              modules: true,
            }
            //loader: 'file-loader'
          },
          {
            loader: 'less-loader',
          }
        ]
      }
    ]
  }
};