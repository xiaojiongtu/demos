/**
 * Created by lull on 2017/8/20.
 */
 var webpack = require('webpack');
   module.exports = {
       entry: __dirname + "/src/main/index.js",
       output: {
           path: __dirname + "/dist",
           filename: 'index.js'
       },
       node: {
           fs: "empty",
           module:"empty"
       }
}