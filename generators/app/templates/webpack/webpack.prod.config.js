const merge = require('lodash/merge');
const path = require('path');

module.exports = function (baseConfig) {
  return merge({}, baseConfig, {
    output: merge({}, baseConfig.output, {
      libraryTarget: 'umd',
      umdNamedDefine: true
    }),
    externals: {
      react: true,
      classnames: true,
      'prop-types': true,
    },
    entry: {
      main: [
        path.normalize(__dirname + '/../src')
      ]
    },
    plugins: []
      .concat(require('./helpers/plugins/css'))
      .concat(require('./helpers/plugins/uglify'))
  });
};