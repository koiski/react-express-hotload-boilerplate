/* eslint-disable import/no-extraneous-dependencies */
const devConf = (process.env.NODE_ENV === 'development') ? require('../webpack.config.dev') : require('../webpack.config.prod');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const wp = webpack(devConf);

// Add HMR middlewares if the environment is DEV
exports.hot = function conditionalHotMiddleware() {
  if (process.env.NODE_ENV === 'development') return webpackHotMiddleware(wp);
  return null;
};
exports.dev = function conditionalDevMiddleware() {
  // Node environment
  if (process.env.NODE_ENV === 'development') return webpackDevMiddleware(wp, { publicPath: devConf.output.publicPath });
  return null;
};