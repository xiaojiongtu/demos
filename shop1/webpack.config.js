/**
 * Created by lull on 2017/8/20.
 */
var webpack = require('webpack'); //访问内置的插件
   module.exports = {
       entry: __dirname + "/src/main/index.js",
       output: {
           path: __dirname + "/dist",
           filename: 'index.js'
       },
       plugins:[
           new webpack.ProvidePlugin({
               $:"jquery",
               jQuery:"jquery",
               "window.jQuery":"jquery"
           })
       ]
}