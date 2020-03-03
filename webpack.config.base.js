const path = require('path');

module.exports = {
    entry: {
        'app': ['./client/app-client.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'static', 'js'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        // Defines the root for all webpack-generated files to be the static folder
        publicPath: '/js/',
      },
    optimization: {
        splitChunks: {
          automaticNameMaxLength: 40,
          cacheGroups: {
            default: true,
          }
        }
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {}
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: ['/node_modules/'],
                use: {
                  loader: 'babel-loader',
                  options: { cacheDirectory: true }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: ['/node_modules/', '/server/'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    },
                }, ],
            },
        ]
    },
    stats: {
        colors: true
    },
};