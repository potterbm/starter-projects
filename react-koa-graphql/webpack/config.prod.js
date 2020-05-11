const path = require('path');
const base = require('./config.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rootPath = path.resolve(__dirname, '../');

const scssRuleIndex = base.module.rules.findIndex(({ test }) => test.test('styles.scss'));

if (scssRuleIndex !== -1) {
  base.module.rules[scssRuleIndex].use.unshift({ loader: MiniCssExtractPlugin.loader });
}

const config = {
  ...base,

  devtool: false,

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

module.exports = config;
