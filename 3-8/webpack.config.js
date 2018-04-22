const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob-all');

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
              singleton: true
            }
          },
          use: [
            { 
              loader: 'css-loader',
              // options: {
              //   modules: true,
              // }
            },
            { 
              loader: 'less-loader' 
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css'
    }),
    new PurifyCSSPlugin({
      paths: glob.sync([
        path.resolve(__dirname, './index.html'),
        path.resolve(__dirname, './src/*.js')
      ])
    }),
    new UglifyJsPlugin(),
  ]
};