const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry : "./src/index.js",
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, '../dist'),
    },
    plugins:[
        new MiniCssExtractPlugin({ filename : 'styles.css' }),
        new HtmlWebpackPlugin({ template : './src/index.html' }),
        new CopyWebpackPlugin({ patterns : [{ from : './src/static', to : path.resolve(__dirname, '../dist/static') }]})
    ],
    module : {
        rules : [
            {
                test : /\.js/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test : /\.sass$/,
                use : [MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
            }
        ]
    }
}