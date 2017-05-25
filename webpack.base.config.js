const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');

require('dotenv').config();

module.exports = () => ({
    entry: {
        bundle: ['./src/index.jsx'],
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devtool: 'source-map',

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|dist)/,
            loaders: ['babel-loader'],
        }, {
            test: /\.s?css$/,
            loaders: [
                'style-loader?sourceMap',
                'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'sass-loader?sourceMap',
            ],
        }],
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/index.html',
        }]),

        new webpack.EnvironmentPlugin([
            'NODE_ENV',
            'CONTENTFUL_ACCESS_TOKEN',
            'CONTENTFUL_SPACE_ID',
            'CONTENTFUL_IS_PREVIEW',
            'CONTENTFUL_PREVIEW_TOKEN',
            'CONTENTFUL_PREVIEW_HOST',
            'CONTENTFUL_CDN_HOST',
        ]),
    ],
});
