/**
 * Created by lull on 2017/8/13.
 */
define(['jquery'],function($){
        function Slider($ct){
            this.$ct=$ct;
            this.init();
            this.bind();
        }
        Slider.prototype.init=function(){
            var $slider=this.$slider=this.$ct.find('.slider');
            var $imgs=this.$imgs=this.$ct.find('.slider>li');
            var $next= this.$next=this.$ct.find('.next');
            var $pre=this.$pre=this.$ct.find('.pre');
            var $dots=this.$dots=this.$ct.find('.dot>li');

            this.pageIndex=0;
            this.lock=false;
            this.imgCount=$imgs.size();
            this.imgWidth=$imgs.width();
            $slider.append($imgs.first().clone());
            $slider.prepend($imgs.last().clone());
            $slider.width((this.imgCount+2)*this.imgWidth);
            $slider.css({left:-this.imgWidth});
        };
        Slider.prototype.bind=function(){
            var _this=this;

            this.$next.on('click',function(){
                _this.nextPlay(1);
            });

            this.$pre.on('click',function(){
                _this.prePlay(1);
            });

            this.$dots.on('click',function(){
                var index=$(this).index();
                if(index>_this.pageIndex){
                    _this.nextPlay(index-_this.pageIndex)
                }else if(index<_this.pageIndex){
                    _this. prePlay(_this.pageIndex-index)
                }
            });
            /*自动录播*/
            setInterval(function(){
                _this.nextPlay(1)
            },2000)
        };
        /*向前翻*/
        Slider.prototype.nextPlay =function (len){
            var _this=this;
            if(this.lock) { this.lock=true;}
            this. $slider.animate({
                left:'-='+len*this.imgWidth
            }, function(){
                _this.pageIndex+=len;
                if (_this.pageIndex===_this.imgCount){//如果到了最后一个，就把下标重置为0，并且包裹图片的父容器偏移
                    _this. pageIndex=0;
                    _this.$slider.css({left:-_this.imgWidth});
                }
                _this.setDot();
                _this.lock=false;
            });
        };
        /*向后翻*/
        Slider.prototype.prePlay=function(len){
            var _this=this;
            this.$slider.animate({
                left:'+='+this.imgWidth*len
            },function(){
                _this.pageIndex-=len;
                if(_this.pageIndex<0){
                    _this.pageIndex=_this.imgCount-1;
                    _this.$slider.css({left:-_this.imgWidth*_this.imgCount});
                }
                _this.setDot();
            })
        };
        /*设置点*/
        Slider.prototype.setDot=function(){
            this.$dots.removeClass('on').eq(this.pageIndex).addClass('on');
        };

    return Slider;
});