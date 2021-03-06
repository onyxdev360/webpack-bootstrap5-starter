const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const paths = require('./paths')
const variables = require('./variables')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    index: paths.src + '/ts/index.ts',
  },

  stats: 'minimal',

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build, // output files here
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    new WebpackBar(),

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
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'tslint-loader',
      },
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      // Emits a separate file and exports the URL. Previously achievable by using file-loader
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      // Exports a data URI of the asset. Previously achievable by using url-loader
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
}
