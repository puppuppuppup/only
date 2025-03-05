import type { Configuration } from 'webpack-dev-server';

export const webpackDevServer: Configuration = {
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
};
