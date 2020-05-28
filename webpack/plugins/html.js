const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(flag) {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/client/index.html',
        minify: {
          collapseWhitespace: flag,
        },
      }),
    ],
  };
};
