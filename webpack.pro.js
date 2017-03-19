var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
// 优化css插件
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var path = require("path")

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: false,
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
        path: path.join(__dirname, "dist"),
        publicPath:"/",
        filename: "js/[name].[hash:5].js"
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              // options: {
              //   presets: ['es2015','react']
              // }
            },
            { test: /\.css$/, use: ["style-loader", "css-loader"]},
            { test: /\.scss$/, 
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader","sass-loader"],
                publicPath: "/"
              })
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     use: ['file-loader?name=image/[hash:5].[ext]?']
            // },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    // 'file-loader?hash=sha512&digest=hex&name=image/[hash].[ext]',
                    'url-loader?limit=3000&name=image/[hash:5].[ext]',// 小于3k的使用base64
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
        // 根据模版生成html
        new HtmlWebpackPlugin({
            title: 'demo',
            template: './index.temp.html',
            minify:{ 
                removeComments : true,
                collapseWhitespace:true,
                removeAttributeQuotes:true
              }
        }),
       
        // 分离库
        //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"),
        // // 优化js
        new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false,  // 是否输出注释
          },
          compress: {
            warnings: false
          }
        }),
         // 分离css
        new ExtractTextPlugin({
            filename: "css/style.[hash:5].css",
            disable: false,
            allChunks: true
        }),
        // 优化css插件
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: {removeAll: true } },
          canPrint: true
        }),
        new webpack.DefinePlugin({
          "process.env": { 
             NODE_ENV: JSON.stringify('production') 
           }
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: "commons",
          filename: "js/commons.[hash:5].js",
          minChunks: 2,
        }),
        new webpack.BannerPlugin("Copyright ........"),
        new webpack.ProvidePlugin({
             // Automtically detect jQuery and $ as free var in modules
             // and inject the jquery library
             // This is required by many jquery plugins
             // $: "jquery",
             // jQuery: "jquery",
             // //"window.jQuery": "jquery"
             // 'react':'window.React',
             // 'react-dom':'window.react-dom'
         }),
    ]
};