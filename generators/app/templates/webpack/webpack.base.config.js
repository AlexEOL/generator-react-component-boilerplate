const path = require('path');

module.exports = {
  cache: false,

  watch: false,

  devtool: false,

  target: 'web',

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.saas'],
    modules: ['node_modules', 'src']
  },

  entry: {},

  output: {
    path: path.normalize(__dirname + '/../lib'),
    publicPath: '',
    filename: 'index.js',
    library: '[name]',
    chunkFilename: '[name].[chunkhash].js'
  },

  plugins: [
    require('./helpers/plugins/vars'),
    require('./helpers/plugins/moment')
  ],

  module: {
    rules: [
      require('./helpers/rules/css'),
      // require('./helpers/rules/scss'),
      require('./helpers/rules/babel'),
      // require('./helpers/rules/images'),
    ].concat(require('./helpers/rules/fonts'))
  },

  // postcss: require('./helpers/postcss')
};