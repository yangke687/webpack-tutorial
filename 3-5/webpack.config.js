module.exports = {
  entry: {
    'app': './src/app.ts'
  },
  output: {
    filename: '[name].bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
};