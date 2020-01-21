const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new HtmlWebpackPlugin({
        template: 'build/tpl/index.html',
        inject: true // 将script注入到body下面，当然不写也行，默认true
    })
];
