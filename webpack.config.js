const path = require('path');

module.exports = {
  entry:{
    controller: './js/index.ts'
  },
  devtool: 'inline-source-map',
  externals:{
    electron:"electron"
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};