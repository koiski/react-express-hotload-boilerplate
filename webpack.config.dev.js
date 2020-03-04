const webpack = require('webpack');
const config = require('./webpack.config.base');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

config.mode = 'development';
config.devtool = 'eval-cheap-source-map';

config.entry['app'].unshift('webpack-hot-middleware/client?quiet=true');
config.entry['app'].pop();
config.entry['app'].push('./client/dev-client.jsx');
config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
config.optimization.splitChunks.cacheGroups.default = false;
config.plugins.push(new webpack.HotModuleReplacementPlugin(), new HardSourceWebpackPlugin());

module.exports = config;