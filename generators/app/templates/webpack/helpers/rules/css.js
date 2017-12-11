const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === 'production') {
  return module.exports = {
    test: /\.css$/,
    use: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader'])
  }
}

module.exports = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader', 'postcss-loader']
};