# Webpack Bootstrap 5 Starter

## Goals

Provide a simple starting point for creating a HTML 5 project using Bootstrap 5 framework:

- ✅ Webpack 5
- ✅ Bootstrap 5
- ✅ Linting
- ✅ TypeScript support
- ✅ SASS support (7-1 Architecture, sassdoc)

## Usage

### Start Development

Run `npm start` to start a Webpack development server. The site will launch on port `8008`. The port can be changed in `./config/variables.js`.

### Build distributable files

Run `npm run build` to build a set of distributable files.

The output folder for distributable files is `./dist`.

## File Structure

The project uses a common structure. The `config folder` contains a development Webpack configuration file, `webpack.dev.js`, as well as a production Webpack configuration file, `webpack.prod.js`. As much as possible, common configuration has been placed in `webpack.common.js`. The production and development configuration files each extend the common configuration.

```
...
├─ webpack-bootstrap5-starter
│  ├─ .babelrc.json
│  ├─ .eslintrc.json
│  ├─ .prettierrc.json
│  ├─ assets
│  │  ├─ css
│  │  │  └─ styles.css
│  │  ├─ fonts
│  │  │  └─ Roboto
│  │  │     ├─ LICENSE.txt
│  │  │     ├─ Roboto-Bold.ttf
│  │  │     └─ Roboto-Regular.ttf
│  │  ├─ img
│  │  │  ├─ favicon.png
│  │  │  └─ pexels-pixabay-38537.jpg
│  │  └─ js
│  │     └─ index.js
│  ├─ config
│  │  ├─ paths.js
│  │  ├─ variables.js
│  │  ├─ webpack.common.js
│  │  ├─ webpack.dev.js
│  │  └─ webpack.prod.js
│  ├─ dist
│  ├─ LICENSE
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ README.md
│  ├─ sassdoc
│  │  ├─ assets
│  │  │  ├─ css
│  │  │  │  └─ main.css
│  │  │  ├─ images
│  │  │  │  ├─ favicon.png
│  │  │  │  ├─ logo_full_compact.svg
│  │  │  │  ├─ logo_full_inline.svg
│  │  │  │  ├─ logo_light_compact.svg
│  │  │  │  └─ logo_light_inline.svg
│  │  │  └─ js
│  │  │     ├─ main.js
│  │  │     ├─ main.min.js
│  │  │     ├─ search.js
│  │  │     ├─ sidebar.js
│  │  │     └─ vendor
│  │  │        ├─ fuse.min.js
│  │  │        ├─ jquery.min.js
│  │  │        └─ prism.min.js
│  │  └─ index.html
│  ├─ src
│  │  ├─ styles
│  │  │  ├─ abstracts
│  │  │  │  ├─ index.scss
│  │  │  │  ├─ _functions.scss
│  │  │  │  ├─ _mixins.scss
│  │  │  │  └─ _variables.scss
│  │  │  ├─ base
│  │  │  │  ├─ index.scss
│  │  │  │  ├─ _animations.scss
│  │  │  │  ├─ _reset.scss
│  │  │  │  ├─ _typography.scss
│  │  │  │  └─ _utilities.scss
│  │  │  ├─ components
│  │  │  │  └─ index.scss
│  │  │  ├─ index.scss
│  │  │  ├─ layout
│  │  │  │  └─ index.scss
│  │  │  ├─ pages
│  │  │  │  ├─ index.scss
│  │  │  │  └─ _demo.scss
│  │  │  ├─ themes
│  │  │  │  └─ index.scss
│  │  │  └─ vendors
│  │  │     ├─ bootstrap
│  │  │     │  └─ scss
│  │  │     │     ├─ bootstrap-grid.scss
│  │  │     │     ├─ bootstrap-reboot.scss
│  │  │     │     ├─ bootstrap-utilities.scss
│  │  │     │     ├─ bootstrap.scss
│  │  │     │     ├─ forms
│  │  │     │     │  ├─ _floating-labels.scss
│  │  │     │     │  ├─ _form-check.scss
│  │  │     │     │  ├─ _form-control.scss
│  │  │     │     │  ├─ _form-range.scss
│  │  │     │     │  ├─ _form-select.scss
│  │  │     │     │  ├─ _form-text.scss
│  │  │     │     │  ├─ _input-group.scss
│  │  │     │     │  ├─ _labels.scss
│  │  │     │     │  └─ _validation.scss
│  │  │     │     ├─ helpers
│  │  │     │     │  ├─ _clearfix.scss
│  │  │     │     │  ├─ _colored-links.scss
│  │  │     │     │  ├─ _position.scss
│  │  │     │     │  ├─ _ratio.scss
│  │  │     │     │  ├─ _stacks.scss
│  │  │     │     │  ├─ _stretched-link.scss
│  │  │     │     │  ├─ _text-truncation.scss
│  │  │     │     │  ├─ _visually-hidden.scss
│  │  │     │     │  └─ _vr.scss
│  │  │     │     ├─ mixins
│  │  │     │     │  ├─ _alert.scss
│  │  │     │     │  ├─ _backdrop.scss
│  │  │     │     │  ├─ _border-radius.scss
│  │  │     │     │  ├─ _box-shadow.scss
│  │  │     │     │  ├─ _breakpoints.scss
│  │  │     │     │  ├─ _buttons.scss
│  │  │     │     │  ├─ _caret.scss
│  │  │     │     │  ├─ _clearfix.scss
│  │  │     │     │  ├─ _color-scheme.scss
│  │  │     │     │  ├─ _container.scss
│  │  │     │     │  ├─ _deprecate.scss
│  │  │     │     │  ├─ _forms.scss
│  │  │     │     │  ├─ _gradients.scss
│  │  │     │     │  ├─ _grid.scss
│  │  │     │     │  ├─ _image.scss
│  │  │     │     │  ├─ _list-group.scss
│  │  │     │     │  ├─ _lists.scss
│  │  │     │     │  ├─ _pagination.scss
│  │  │     │     │  ├─ _reset-text.scss
│  │  │     │     │  ├─ _resize.scss
│  │  │     │     │  ├─ _table-variants.scss
│  │  │     │     │  ├─ _text-truncate.scss
│  │  │     │     │  ├─ _transition.scss
│  │  │     │     │  ├─ _utilities.scss
│  │  │     │     │  └─ _visually-hidden.scss
│  │  │     │     ├─ utilities
│  │  │     │     │  └─ _api.scss
│  │  │     │     ├─ vendor
│  │  │     │     │  └─ _rfs.scss
│  │  │     │     ├─ _accordion.scss
│  │  │     │     ├─ _alert.scss
│  │  │     │     ├─ _badge.scss
│  │  │     │     ├─ _breadcrumb.scss
│  │  │     │     ├─ _button-group.scss
│  │  │     │     ├─ _buttons.scss
│  │  │     │     ├─ _card.scss
│  │  │     │     ├─ _carousel.scss
│  │  │     │     ├─ _close.scss
│  │  │     │     ├─ _containers.scss
│  │  │     │     ├─ _dropdown.scss
│  │  │     │     ├─ _forms.scss
│  │  │     │     ├─ _functions.scss
│  │  │     │     ├─ _grid.scss
│  │  │     │     ├─ _helpers.scss
│  │  │     │     ├─ _images.scss
│  │  │     │     ├─ _list-group.scss
│  │  │     │     ├─ _mixins.scss
│  │  │     │     ├─ _modal.scss
│  │  │     │     ├─ _nav.scss
│  │  │     │     ├─ _navbar.scss
│  │  │     │     ├─ _offcanvas.scss
│  │  │     │     ├─ _pagination.scss
│  │  │     │     ├─ _placeholders.scss
│  │  │     │     ├─ _popover.scss
│  │  │     │     ├─ _progress.scss
│  │  │     │     ├─ _reboot.scss
│  │  │     │     ├─ _root.scss
│  │  │     │     ├─ _spinners.scss
│  │  │     │     ├─ _tables.scss
│  │  │     │     ├─ _toasts.scss
│  │  │     │     ├─ _tooltip.scss
│  │  │     │     ├─ _transitions.scss
│  │  │     │     ├─ _type.scss
│  │  │     │     ├─ _utilities.scss
│  │  │     │     └─ _variables.scss
│  │  │     └─ index.scss
│  │  ├─ templates
│  │  │  └─ template.html
│  │  └─ ts
│  │     └─ index.ts
│  ├─ tsconfig.json
│  └─ tslint.json
```

## Packages

### Formatting

[prettier](https://www.npmjs.com/package/prettier)

### TypeScript

[typescript](https://www.npmjs.com/package/typescript)

### Linting

#### JS Linting

[eslint](https://www.npmjs.com/package/eslint)
[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
[eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
[eslint-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack)
[eslint-loader](https://www.npmjs.com/package/eslint-loader)
[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
[eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)

#### TS Linting

[tslint](https://www.npmjs.com/package/tslint)
[tslint-config-airbnb](https://www.npmjs.com/package/tslint-config-airbnb)
[tslint-loader](https://www.npmjs.com/package/tslint-loader)

### CSS Frameworks

[bootstrap](https://www.npmjs.com/package/bootstrap)

### CSS/SASS processing

[css-loader](https://www.npmjs.com/package/css-loader)
[sass-loader](https://www.npmjs.com/package/sass-loader)
[style-loader](https://www.npmjs.com/package/style-loader)
[node-sass](https://www.npmjs.com/package/node-sass)
[postcss-loader](https://www.npmjs.com/package/postcss-loader)
[postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env)

### JS transpiling

[babel-loader](https://www.npmjs.com/package/babel-loader)
[@babel/core](https://www.npmjs.com/package/@babel/core)
[@babel/plugin-proposal-class-properties](https://www.npmjs.com/package/@babel/plugin-proposal-class-properties)
[@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)

### Webpack

#### Core

[webpack](https://www.npmjs.com/package/webpack)
[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)
[webpack-cli](https://www.npmjs.com/package/webpack-cli)
[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)

#### CSS minification

[css-minimizer-webpack-plugin](https://www.npmjs.com/package/css-minimizer-webpack-plugin)
[mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)

#### HTML processing

[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)

#### Utilities

[clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)
[copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin)
[webpackbar](https://www.npmjs.com/package/webpackbar)

## Project configuration

The goal of this starter project is to provide a simple starting point for creating an HTML web project using Webpack 5 and Bootstrap 5.

In `./src/templates` you will find a sole file `template.html`.

In `./config/webpack.common.js`, `HtmlWebpackPlugin` is used to generate output html files based on templates stored in `./src/templates`.

```js
new HtmlWebpackPlugin({
  filename: 'index.html',
  chunks: ['index'],
  title: 'webpack - HTML5 Boilerplate',
  description: variables.description,
  favicon: paths.assets + '/img/favicon.png',
  template: paths.src + '/templates/template.html', // template file
  minify: false,
})
```

### Configuration files

- .gitignore - Git ignore file
- .babelrc.json - Babel configuration
- .eslintrc.json - eslint configuration
- .prettierrc.json - prettier configuration
- postcss.config.js - postcss configuration
- tsconfig.json - TypeScript configuration
- tslint.json - tslint configuration
- package.json - NPM package file

### NPM scripts

- start: build SASS documentation and start Webpack development server

  ```js
  "start": "sassdoc ./src/styles && cross-env NODE_ENV=development webpack serve --config config/webpack.dev.js"
  ```

- build: build production distributable files

  ```js
  "build": "cross-env NODE_ENV=production webpack --config config/webpack.prod.js",
  ```

- sassdoc: build SASS documentation

  ```js
  "sassdoc": "sassdoc ./src/styles"
  ```

### Add additional html files

1. Add a template to `./src/templates` (eg contacts.html).
2. Add add another call the `HtmlWebpackPlugin` in `webpack.common.js`.

```js
new HtmlWebpackPlugin({
  filename: 'contacts.html',
  chunks: ['contacts'],
  title: 'Contacts',
  description: variables.description,
  favicon: paths.assets + '/img/favicon.png',
  template: paths.src + '/templates/contacts.html', // template file
  minify: false,
})
```

### TypeScript support

Typescript is supported without any additional changes. See `./src/index.ts` to get started.

### SASS support

Sass is supported in the configuration. Place SASS files in `./src/styles`.

#### SASS and Bootstrap 5

The Bootstrap project makes SASS source files available for distribution. Importing Bootstrap 5 via SASS allows Bootstrap to be used in a web project while allowing you to retain some control over the design. Many developers prefer to use Bootstrap to take advantage of the grid system provided by Bootstrap while ignoring the many additional components provided by Bootstrap. The SASS files required to take that approach are provided in the source files. Simply import `./src/styles/vendors/bootstrap/scss/bootstrap-grid.scss` instead of importing `./src/styles/vendors/bootstrap/scss/bootstrap.scss`. If you started the project using the full Bootstrap, be sure to remove any ceremonial CSS classes that you may have included in your initial design and replace them with your own design classes. The earlier that this decision is made, the less work you have to do later.

> The use of SASS also allows for easier customization of Bootstrap 5. See https://getbootstrap.com/docs/5.0/customize/sass/

#### SASS architecture

The SASS files are structured using the common 7-1 architecture. There 7 different folders to contain SASS partials related to each part of the architecture. Each folder containers an `index.scss` files that is used to import the partial files. There is one `index.scss` file that is located at the root of the `./src/styles` folder. The `index.scss` files associated with each area of the architecture are imported into the main `index.scss` file.

```
...
├─ webpack-html5-starter
│  ├─ src
│  │  ├─ styles
│  │  │  ├─ abstracts
│  │  │  │  ├─ index.scss
│  │  │  │  ├─ _functions.scss
│  │  │  │  ├─ _mixins.scss
│  │  │  │  └─ _variables.scss
│  │  │  ├─ base
│  │  │  │  ├─ index.scss
│  │  │  │  ├─ _animations.scss
│  │  │  │  ├─ _reset.scss
│  │  │  │  ├─ _typography.scss
│  │  │  │  └─ _utilities.scss
│  │  │  ├─ components
│  │  │  │  └─ index.scss
│  │  │  ├─ index.scss
│  │  │  ├─ layout
│  │  │  │  └─ index.scss
│  │  │  ├─ pages
│  │  │  │  ├─ index.scss
│  │  │  │  └─ _demo.scss
│  │  │  ├─ themes
│  │  │  │  └─ index.scss
│  │  │  └─ vendors
│  │  │     └─ index.scss
```

```scss
// styles.scss
@import './vendors/index.scss';
@import './abstracts/index.scss';
@import './base/index.scss';
@import './layout/index.scss';
@import './components/index.scss';
@import './themes/index.scss';
@import './pages/index.scss';
```

## License

This project is open source and available under the MIT License.

## Credits

#### Authors

Travis Yeargin <onyxdev360@gmail.com>

#### Webpack configuration

The original webpack configure was inspired by [Tania Rascia](https://www.taniarascia.com) and is based on her excellent starter template that is available [here](https://github.com/taniarascia/webpack-boilerplate).

#### Other

[https://gist.github.com/jonathantneal](https://gist.github.com/jonathantneal):
A useful mixin for importing local fonts. The mixin is available [here](https://gist.github.com/jonathantneal/d0460e5c2d5d7f9bc5e6).

[https://engageinteractive.co.uk/blog/top-10-scss-mixins](https://engageinteractive.co.uk/blog/top-10-scss-mixins): The media query (mq) mixin detailed on the site is used in this project with a slight modification and the additional of two media query mixins for applying min-width and max-width explicitly.
