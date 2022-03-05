const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const paths = require('./paths');
const variables = require('./variables');

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    static: [paths.src, paths.build],
    open: true,
    compress: true,
    port: variables.port,
  },
});
