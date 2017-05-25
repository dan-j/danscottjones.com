const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotEnv = require('dotenv-webpack');

const webpack = require('webpack');

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
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        // new ExtractTextPlugin('styles.css'),
        new DotEnv(),
    ],
});
