const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [{ loader: 'ts-loader', options: { happyPackMode: true } }],
        exclude: /node_modules/,
      },
      {
        test: /\.jpg/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // to import index.html file inside index.js
    }),
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
    new Dotenv({
      path: '.env',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    port: 3000,
    historyApiFallback: true,
  },
};
