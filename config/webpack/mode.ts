import { Configuration } from 'webpack';

export let mode: Configuration['mode'] = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}
