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
<<<<<<< HEAD
            //loader: 'style-loader/url' // second
            loader: 'style-loader',
            options: {
              insertInto: '#app',
              singleton: true,
              transform: './css.transform.js', // css transformer
            }
          },
          {
            loader: 'css-loader'  // first
            //loader: 'file-loader'
=======
            loader: 'style-loader/url' // second
          },
          {
            //loader: 'css-loader'  // first
            loader: 'file-loader'
>>>>>>> 5f52be3025d782d84231f255f0fc5a21525159e8
          }
        ]
      }
    ]
  }
};