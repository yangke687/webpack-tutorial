const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const baseConfig = {
  entry: {
    react: 'react',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
  },

  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react',
      chunks: Infinity,
    }),
  ]
};

const generatePage = function({
  title = '',
  entry = {},
  template = './src/index.html',
  name = '',
  chunks = [],
} = {}) {
  return {
    entry,
    plugins: [ new HtmlWebpackPlugin({
      chunks,
      template,
      title,
      filename: name + '.html',
    })],
  };
};

const pages = [
  generatePage({
    title: 'Page A',
    entry: {
      a: './src/pages/a',
    },
    name: 'a',
    chunks: ['react', 'a'],
  }),
  generatePage({
    title: 'Page B',
    entry: {
      b: './src/pages/b',
    },
    name: 'b',
    chunks: ['react', 'b'],
  }),
  generatePage({
    title: 'Page C',
    entry: {
      c: './src/pages/c',
    },
    name: 'c',
    chunks: ['react', 'c'],
  }),
];

/** pack multiple pages */
module.exports = pages.map(page => merge(baseConfig, page));
