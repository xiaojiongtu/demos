/**
 * Created by lull on 2017/8/13.
 */
//首页功能
var $=require('../lib/jquery-1.8.3.min.js');
var GoTop=require('../js/GoTop.js');
var Slider=require('../js/Slider.js');
var WaterFall=require('../js/WaterFall.js');

 new GoTop($('body'));
 new Slider($('.container1'));
WaterFall();
