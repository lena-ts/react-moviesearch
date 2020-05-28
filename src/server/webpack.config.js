/* eslint no-undef: "off" */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: path.join(__dirname, './index.js'),
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    publicPath: '/',
    filename: 'server.js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  resolve: {
    alias: {
      client: path.join(__dirname, '../client'),
      server: path.join(__dirname, './'),
      components: path.join(__dirname, '../components/'),
      reducers: path.join(__dirname, '../reducers/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};
