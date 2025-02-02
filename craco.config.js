const webpack = require('webpack');

module.exports = {
    webpack: {
        configure: {
            resolve: {
                fallback: {
                    stream: require.resolve('stream-browserify'),
                    http: require.resolve('stream-http'),
                    https: require.resolve('https-browserify'),
                    zlib: require.resolve('browserify-zlib'),
                    buffer: require.resolve('buffer/'),
                },
            },
            plugins: [
                new webpack.ProvidePlugin({
                    Buffer: ['buffer', 'Buffer'],
                    process: 'process/browser',
                }),
            ],
        },
    },
};
