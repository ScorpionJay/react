var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require("path")

module.exports = {
	context: path.join(__dirname, "src"),
	cache:true,
	devtool: 'source-map',
    entry: {
    	app: "./index",
    	//vendor: ["jquery"]
	},
	externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        'jquery': 'jQuery',
        'react':'window.React',
        'react-dom':'window.ReactDOM'
    },
    output: {
        path: path.join(__dirname, "dev"),
        publicPath:"/",
        filename: "js/[name].[hash].js"
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              //options: { // 可以配置在.babelrc文件中
              //  presets: ['es2015','react']
              //}
            },
            { test: /\.css$/, use: ["style-loader", "css-loader"]},
            { test: /\.scss$/, 
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader","sass-loader"],
                publicPath: "/"
              })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ['file-loader?name=image/[hash].[ext]?']
            }
        ]
    },
    plugins: [
    	// 根据模版生成html
        new HtmlWebpackPlugin({
            title: 'demo',
            template: './index.temp.html',
        }),
        new ExtractTextPlugin({
            filename: "css/style.[hash].css",
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
          names: ["common"]
        }),
        // 打开浏览器
  		new OpenBrowserPlugin({ url: 'http://localhost:9999' })
    ],
    devServer: {
        contentBase: "./src",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port:9999
    } 
};