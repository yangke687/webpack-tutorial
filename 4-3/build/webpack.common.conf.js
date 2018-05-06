const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin');


const prodConfig = require('./webpack.prod.conf')
const devConfig = require('./webpack.dev.conf')
const merge = require('webpack-merge')

const generateConfig = env => {

  const scriptLoaders = [
    {
      loader: 'babel-loader',
    },
  ].concat(
    env === 'production' ? [] : [{
      loader: 'eslint-loader',
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    }]
  )

  const extractLess = new ExtractTextWebpackPlugin({
    filename: 'css/[name]-[hash:5].min.css'
  })

  const cssLoaders = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: env === 'development',
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        sourceMap: env === 'development',
        plugins: [
          require('autoprefixer')()
        ].concat(env === 'production' ? [
          require('postcss-sprites')({
            spritePath: 'dist/assets'
          })
        ] : [

        ])
      }
    },
    {
      loader: 'less-loader',
      options: {
        sourceMap: env === 'development',
      }
    }
  ]

  const styleLoaders = env === 'production' ? extractLess.extract({
    fallback: {
      loader: 'style-loader',
      options: {
        sourceMap: env === 'production'
      }
    },
    use: cssLoaders
  }) : [
    {
      loader: 'style-loader'
    }
  ].concat(cssLoaders)

  const fileLoaders = env === 'development' ? [
    {
      loader: 'file-loader',
      options: {
        name: '[name]-min.[ext]',
        outputPath: 'assets/'
      }
    }
  ] : [
    {
      loader: 'url-loader',
      options: {
        name: '[name]-min.[ext]',
        limit: 1,
        outputPath: 'assets/'
      }
    }
  ]

  return {
    entry: {
      app: './src/app.js'
    },

    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
      filename: 'js/[name].bundle-[hash:5].js', // put '.js' files into 'js' sub folder of dist directory
    },

    resolve: {
      alias: {
        jquery$: path.resolve(__dirname, '../src/libs/jquery.min.js'),
      }
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [ path.resolve(__dirname, '../src/libs') ],
          use: scriptLoaders
        },
        {
          test: /\.less$/,
          use: styleLoaders
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/,
          use: fileLoaders.concat(
            env === 'production' ? [{
              loader: 'img-loader',
              options: {
                pngquant: {
                  quality: 80 /** 0 - 100 */
                }
              }
            }] : []
          )
        },
        {
          test: /\.(eot|woff2|woff|ttf|svg)$/,
          use: fileLoaders
        }
      ]
    },

    plugins: [
      extractLess,
      new htmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html',
        // chunks: ['app'],
        minify: {
          collapseWhitespace: true
        }
      }),
      new cleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname, '../')
      })
    ]
  }
}

module.exports = env => {
  let config = env === 'production' ? prodConfig : devConfig
  return merge(
    generateConfig(env),
    config
  )
}