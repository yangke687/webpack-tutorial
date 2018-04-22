var webpack = require('webpack')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var path = require('path')

var extractLess = new ExtractTextWebpackPlugin({
  filename: 'css/[name].min.css'
});

module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: extractLess.extract({
          fallback: {
            loader: 'style-loader',
          },
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('autoprefixer')(),
                  require('postcss-sprites')({
                    spritePath: 'dist/assets'
                  }),
                ]
              }
            },
            {
              loader: 'less-loader',
            }
          ]
        })
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-min.[ext]',
              publicPath: '../assets',
              useRelativePath: true,
            }
          },
          // {
          //   loader: 'url-loader',
          //   options: {
          //     limit: 1000,
          //   }
          // }
          {
            loader: 'img-loader',
            options: {
              pngquant: {
                quality: 80, /** 0 - 100 */
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    extractLess,
  ]
};