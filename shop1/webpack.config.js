/**
 * Created by lull on 2017/8/20.
 */
var webpack = require('webpack'); //访问内置的插件
   module.exports = {
       entry: __dirname + "/src/main/index.js",
       output: {
           path: __dirname + "/dist",
           filename: 'index.js'
<<<<<<< HEAD
       },
       plugins:[
           new webpack.ProvidePlugin({
               $:"jquery",
               jQuery:"jquery",
               "window.jQuery":"jquery"
           })
       ]
}
=======
       }
}
>>>>>>> 687da29def596394a3f33f169880f1634ad15b8f
