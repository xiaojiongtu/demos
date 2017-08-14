/**
 * Created by lull on 2017/8/13.
 */

define(['jquery'],function($){
    function GoTop($ct){
        this.$ct=$ct;
        this.$target=$('<div class="btn">回到顶部</div>');
        this.$target.css({
            position:'fixed',
            right:20+'px',
            bottom:30+'px',
            fontSize:18+'px',
            padding:7+'px'+" "+ 8+'px',
            background:'#4caf50',
            color:'#fff',
            cursor:"pointer"
        });
        this.createNode();
        this.bindEvent();
    }
    GoTop.prototype.createNode=function(){
        this.$ct.append(this.$target);

    };
    GoTop.prototype.bindEvent=function(){
        $(window).scroll(function(e){
            if($(window).scrollTop()>1){
                $('.btn').fadeIn(500);
            }else{
                $('.btn').fadeOut(500);
            }
        });
        $('.btn').click(function(){
            $('html,body').animate({scrollTop:0},'slow');
        });
    };
    return GoTop;
});



