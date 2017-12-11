const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === 'production') {
  return module.exports = {
    test: /\.(scss|sass)$/,
    use: ExtractTextPlugin.extract('style-loader', ['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss-loader', 'sass-loader'])
  }
}

module.exports = {
  test: /\.(scss|sass)$/,
  use: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss-loader', 'sass-loader']
};