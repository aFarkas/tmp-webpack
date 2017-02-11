const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
            moveToParents: false,
            minSize: 10000,
            minChunks: 2,
        }),
    ],
};
