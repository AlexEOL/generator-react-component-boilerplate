const webpackConfig = require('../webpack.config');
const _ = require('lodash');

module.exports = storybookBaseConfig => {
  return _.merge({}, webpackConfig, {
    plugins: storybookBaseConfig.plugins,
    output: storybookBaseConfig.output,
    entry: {
      ...storybookBaseConfig.entry,
      main: [],
    },
    externals: [],
  });
};
