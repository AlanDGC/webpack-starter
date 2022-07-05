//! Si no se configura este archivo en especial el mode: todo el archivo lo pasara a producción y se minimizara el codigo, pero con el mode: 'development' sera la configuracion de desarrollo y el main.js no estara minimzado y sera mas facil de leer
const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");



module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    }, 

    optimization: {},

    plugins: [
        new HtmlWebpack({
            title: 'Mi webpack App',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtract ({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [{ from: 'src/assets', to: 'assets'  }]
        }),
    ],
};