const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
];

if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    mode,
    entry: './src/index.tsx',
    plugins,
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        allowedHosts: 'all',
        hot: true,
        client: {
            overlay: {
                errors: true,
                warnings: true,
            },
            progress: true,
        },

        port: 3000,
    },

    module: {
        rules: [
            { test: /\.(html)$/, use: ['html-loader'] },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
            //     type: 'asset/resource',
            // },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)$/i,
            //     exclude: /node_modules/,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'assets/fonts/[hash][ext]',
            //     },
            // },
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ],
    },
};
