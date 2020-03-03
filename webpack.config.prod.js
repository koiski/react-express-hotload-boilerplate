const config = require('./webpack.config.base');
const TerserPlugin = require('terser-webpack-plugin');

config.mode = 'production';
config.devtool = 'none';

config.optimization = {
  minimize: false,
  minimizer: [new TerserPlugin()],
  splitChunks: {
    automaticNameMaxLength: 40,
  },
};
module.exports = config;