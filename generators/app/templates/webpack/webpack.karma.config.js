const extend = require('lodash/extend');

module.exports = function (baseConfig) {
  return extend({}, baseConfig, {
    cache: undefined,

    debug: undefined,

    watch: undefined,

    devtool: 'inline-source-map',

    entry: '',

    resolve: {
      extensions: ['.js', '.jsx', '.css', '.scss', '.saas'],
      modules: ['node_modules', 'src']
    },

    output: {},

    externals: {
      'cheerio': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },

    module: {
      rules: []
        .concat(baseConfig.module.rules)
        .concat(require('./helpers/rules/json'))
    },

    plugins: []
      .concat(baseConfig.plugins)
      .concat(require('./helpers/plugins/noErrors'))
  });
};