const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = function() {
  return {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, './../../src/favicon.ico'),
          to: path.resolve(__dirname, './../../build'),
        },
      ]),
    ],
  };
};
