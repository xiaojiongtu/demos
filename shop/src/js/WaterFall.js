/**
 * Created by lull on 2017/8/13.
 */
define(['jquery'],function($){
    /*瀑布流*/
    var fall=(function(){
        /*获取数据,并把数据填充到页面*/
        var currentPage=1;
        var pageCount=10;
        var colHeight=[];
        var nodeWidth=$('.list-item').outerWidth(true);
        var colCount=parseInt($('.list-ct').width()/nodeWidth);
        //初始化列数数组
        for(var i=0;i<colCount;i++){
            colHeight[i]=0;
        }
        var isDataArrive=true;
        /*初始化*/
        init();
        function init(){
            getData(function(newList){
                console.log(newList);
                isDataArrive=true;
                $.each(newList,function(index,news){
                    var $node=renderData(news);
                    $node.find('img').load(function(){
                        $('.list-ct').append($node);
                        waterFall($node);
                    })
                })
            });
            isDataArrive=false;
        }
        /*向服务器发送请求*/
        function getData(callback){
            $.ajax({
                url:"http://platform.sina.com.cn/slide/album_tech",
                dataType:"jsonp",
                jsonp:"jsoncallback",
                type:"get",
                data:{
                    app_key:1271687855,
                    num:pageCount,
                    page:currentPage
                },
                success:function(ret){
                    if(ret&&ret.status&&ret.status.code==="0"){
                        callback(ret.data);
                        currentPage++;
                    }
                },
                error:function(){
                    alert("获取数据异常")
                }
            })
        }
        /*渲染页面*/
        function renderData(item){
            var html='' ;
            html+='<li class="list-item">';
            html+='       <a href="'+item.url+'">';
            html+='            <img src="'+item.img_url+'" alt="">';
            html+='            <h4 class="tit">'+item.short_name+'</h4>';
            html+='             <p class="decr">'+item.short_intro+'</p>';
            html+='       </a>';
            html+=' </li>';
            return $(html);
        }
        /*瀑布流*/
        function waterFall($node){
            var index=0;
            var  minHeight=colHeight[0];
            for(var i=0;i<colHeight.length;i++){
                if(colHeight[i]<minHeight){
                    index=i;
                    minHeight=colHeight[i];
                }
            }
            $node.css({
                left:nodeWidth*index,
                top:minHeight,
                opacity:1
            });
            colHeight[index]=$node.outerHeight(true)+colHeight[index];
            $('.list-ct').height(Math.max.apply(null,colHeight));
        }

        /*加载更多*/
        function more(){
            getData(function(newList){
                console.log(newList);
                $("#add").on('click',function(){
                    $.each(newList,function(index,news){
                        var $node=renderData(news);
                        $node.find('img').load(function(){
                            $('.list-ct').append($node);
                            waterFall($node);
                        })
                    })
                })
            });
        }
        more();
    })();
    return fall;
});