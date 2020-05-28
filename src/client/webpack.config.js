/* eslint no-undef: "off" */
const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const clean = require('../../webpack/plugins/clean');
const copy = require('../../webpack/plugins/copy');
const html = require('../../webpack/plugins/html');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const DEV = process.env.NODE_ENV === 'development';

const filename = (name, ext) =>
  DEV ? `${name}.[hash].${ext}` : `${name}.${ext}`;

const cssLoaders = extra => {
  const loaders = [
    MiniCssExtractPlugin.loader,
    { loader: 'css-loader', options: { importLoaders: 1 } },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: [require('autoprefixer')],
      },
    },
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const baseConfig = merge([
  {
    entry: path.join(__dirname, 'index.js'),
    output: {
      path: path.join(__dirname, '../../static'),
      filename: filename('bundle', 'js'),
      publicPath: '/static/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: cssLoaders(),
        },
        {
          test: /\.s[ac]ss$/,
          use: cssLoaders('sass-loader'),
        },
        {
          test: /\.(png|jpg|svg|gif|ico)$/,
          use: ['file-loader'],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: filename('index', 'css'),
      }),
      new FaviconsWebpackPlugin({
        logo: 'src/client/favicon.ico',
        prefix: '/',
      }),
    ],
  },
  copy(),
  clean(),
  html(!DEV),
]);

const devConfig = {
  ...baseConfig,
  devtool: 'source-map',
};

const prodConfig = {
  ...baseConfig,
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin(),
    ],
  },
};
module.exports = DEV ? devConfig : prodConfig;
