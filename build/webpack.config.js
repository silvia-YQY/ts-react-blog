const { resolve } = require('./utils');
const jsRules = require('./rules/jsRules');
const plugins = require('./plugins');
const styleRules = require('./rules/styleRules');

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@views': resolve('src/containers/views'),
            '@shared': resolve('src/containers/shared'),
            '@services': resolve('src/services')
        }
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [...plugins],
    module: {
        rules: [...jsRules, ...styleRules]
    },
    devtool: 'source-map'
};
