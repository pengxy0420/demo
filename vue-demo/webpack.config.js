var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//var isDev = process.env.NODE_ENV === 'development';
var config = {
    target: 'web',
    //入口
    entry: {
        app: [
                'webpack-dev-server/client?http://localhost:8080/',
                path.join(__dirname, 'entry.js')
            ]
    },

    //出口
    output: {
        filename: 'main.js',  // 输出的文件名
    },
    devServer: {
      filename: "main.js"
    },

    module: {
        rules: [

            // 配置buble-loader
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'src/js'),
                query: {
                  presets: 'es2015',
                }
            },
            
            // 解析.vue文件名------>vue-loader ExtractPlugin
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.less$/,
                loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
            },

            //图片处理
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,  // 文件小于1024字节，转换成base64编码，写入文件里面
                            name: '[name]-output.[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
        //new HTMLPlugin()
    ]

}


module.exports = config;