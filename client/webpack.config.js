const HTMLWEBPACKPLUGIN = require('html-webpack-plugin')

module.exports = {
    entry: {
        client: "./src/index.js",
        admin: './src/admin/admin.js'
    },
    output: {
        filename: "./[name]/[name].js",
        path: require('path').resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: { injectType: 'singletonStyleTag' },
                    },
                    'css-loader',
                ]
            }, {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    },
    plugins: [new HTMLWEBPACKPLUGIN({
        title: 'WelCome',
        template: "./src/index.html",
        chunks: ['client'],
        filename: "./index.html"
    }), new HTMLWEBPACKPLUGIN({
        template: "./src/index.html",
        title: 'WelCome Admin',
        chunks: ['admin'],
        filename: "./admin/index.html"
    })],

    devServer: {
        contentBase: '.',
        port: 8000,
        historyApiFallback: true,
        open: true

    }
}