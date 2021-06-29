const path = require('path');
const 
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000
    },
    modules: {

    },
    plugins: [],
    devServer: {
        port: 3000,
        overlay: true,
        open: true,
        hot: true,
        historyApiFallback: true,
    }
}