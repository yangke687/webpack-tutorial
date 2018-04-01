const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

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
        use: ExtractTextWebpackPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              //insertInto: '#app',
              singleton: true,
              transform: './css.transform.js', // css transformer
            }
          },
          use: [
            {
              loader: 'css-loader', // first
              options: {
                minimize: true,
                modules: true,
              }
              //loader: 'file-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('autoprefixer')(),
                ]
              }
            },
            {
              loader: 'less-loader',
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css'
    })
  ]
};