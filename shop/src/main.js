/**
 * Created by lull on 2017/8/13.
 */
require.config({
    baseUrl: 'js',
    paths: {
        jquery: '../lib/jquery-1.8.3.min'
    }
});

//加载入口模板
requirejs(['src/web/index']);
