const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const variables = require('./variables');

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    index: paths.src + '/ts/index.ts',
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build, // output files here
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Copies files from assets to dist/assets
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      title: 'webpack - HTML5 Boilerplate',
      description: variables.description,
      favicon: paths.assets + '/img/favicon.png',
      template: paths.src + '/templates/template.html', // template file
      minify: false,
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // Images: Copy image files to build folder
      // Emits a separate file and exports the URL. Previously achievable by using file-loader
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      // Exports a data URI of the asset. Previously achievable by using url-loader
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
};
