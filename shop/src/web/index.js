/**
 * Created by lull on 2017/8/13.
 */
//首页功能
requirejs(['jquery','src/js/GoTop','src/js/Slider','src/js/WaterFall'],function($,GoTop,Slider,WaterFall){
                new GoTop($('body'));
                new Slider($('.container1'));
                fall();
});
