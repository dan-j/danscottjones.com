const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = () => webpackMerge(
    {
        entry: {
            bundle: [
                'react-hot-loader/patch',
                'webpack/hot/only-dev-server',
            ],
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
        ],

        devServer: {
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, 'dist/'),
            hot: true,
            host: '0.0.0.0',
        },
    },
    baseConfig());
