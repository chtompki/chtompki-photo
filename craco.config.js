const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        configure: (webpackConfig) => {
            webpackConfig.resolve.fallback = {
                ...webpackConfig.resolve.fallback,
                "crypto": require.resolve("crypto-browserify"),
                "stream": require.resolve("stream-browserify"),
                "assert": require.resolve("assert"),
                "http": require.resolve("stream-http"),
                "https": require.resolve("https-browserify"),
                "os": require.resolve("os-browserify"),
                "url": require.resolve("url"),
                "buffer": require.resolve("buffer"),
                "process": require.resolve("process/browser"),
            };

            return webpackConfig;
        },
    },
};
