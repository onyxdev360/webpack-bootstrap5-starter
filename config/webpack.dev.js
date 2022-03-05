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

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?url=false',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: variables.enableCssModules,
            },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },

  plugins: [],
});
