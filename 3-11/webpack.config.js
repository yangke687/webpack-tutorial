var webpack = require('webpack')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
var htmlInlineChunkPlugin = require('html-webpack-inline-chunk-plugin')

var extractLess = new ExtractTextWebpackPlugin({
  filename: 'css/[name]-[hash:5].min.css'
});

module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    //publicPath: '/',
    filename: '[name].bundle-[hash:5].js',
  },

  resolve: {
    alias: {
      jquery$: path.resolve(__dirname, 'src/libs/jquery.min.js'),
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      },
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
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '[name]-min.[ext]',
          //     publicPath: '../assets',
          //     useRelativePath: true,
          //   }
          // },
          {
            loader: 'url-loader',
            options: {
              name: '[name]-min.[ext]',
              limit: 1,
              outputPath: 'assets/',
            }
          },
          {
            loader: 'img-loader',
            options: {
              pngquant: {
                quality: 80, /** 0 - 100 */
              }
            }
          }
        ]
      },
      {
        test: /\.(eot|woff2|woff|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].[ext]',
              limit: 5000,
              publicPath: '../assets/fonts',
              useRelativePath: true,
            }
          }
        ]
      },
      /** imports loader <=> webpack.providePlugin jquery */
      {
        test: path.resolve(__dirname, 'src/app.js'),
        use: [
          {
            loader: 'imports-loader',
            options: {
              $: 'jquery',
            }
          }
        ]
      },
      
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'html-loader',
      //       options: {
      //         attrs: ['img:src', 'img:data-src'], // default: 'img:src',
      //       }
      //     }
      //   ]
      // }
    ]
  },

  plugins: [
    extractLess,
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      //chunks: ['app'],
      minify: {
        collapseWhitespace: true,
      }
    })
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    // })

    ,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),

    new htmlInlineChunkPlugin({
      inlineChunks: ['manifest'],
    })
  ]
};