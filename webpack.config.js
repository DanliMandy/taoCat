var ExtractTextPlugin = require('extract-text-webpack-plugin');
const  {VueLoaderPlugin} = require('vue-loader');
var path = require('path');  //专门处理路径用的
var config = {
    entry: './src/js/main.js', //入口文件
    output:{
        path: path.resolve('./dist'),
        // publicPath: '/dist/',
        filename: 'bundle.js' //打包后的名字
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options:{
                    loaders:{
                        css: ExtractTextPlugin.extract({
                            use:  'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use:  'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpg|png|jpeg|woff|woff2|ttf|svg|eot)$/,
                use: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        //重命名提取后的css文件
        new ExtractTextPlugin("main.css"),
        new VueLoaderPlugin()
    ]
};
module.exports = config;