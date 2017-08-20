/**
 * Created by lull on 2017/8/13.
 */
//首页功能
var $=require('jquery');
var GoTop=require('../js/GoTop.js');
var Slider=require('../js/Slider.js');
var WaterFall=require('../js/WaterFall.js');

 new GoTop($('body'));
 new Slider($('.container1'));
  WaterFall();
