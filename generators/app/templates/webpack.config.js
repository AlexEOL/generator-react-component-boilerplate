const config = require('./webpack/webpack.base.config');
const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === 'test') {
  module.exports = require('./webpack/webpack.karma.config')(config);
} else {
  module.exports = require('./webpack/webpack.prod.config')(config);
}
