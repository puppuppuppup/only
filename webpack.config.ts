import path from 'path';
import { Configuration } from 'webpack';
import type { Configuration as _ } from 'webpack-dev-server';
import { webpackDevServer } from './config/webpack/dev-server';
import { mode } from './config/webpack/mode.ts';
import { webpackPlugins } from './config/webpack/plugins.ts';
import { webpackLoaders } from './config/webpack/loaders.ts';

const config: Configuration = {
    mode,
    entry: './src/index.tsx',
    plugins: webpackPlugins,
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: webpackDevServer,
    module: {
        rules: webpackLoaders,
    },
};

export default config;
