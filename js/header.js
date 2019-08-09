var status=false;
$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success: function(result) {
            $(result).replaceAll("#header");
            $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
            status=true;
        }   
    })
})
var timer=setInterval(()=>{
    if(status){
        var $imgs=$(".mini-login .img img");
        // cons
        status=false;
        var left1=0;
        var left2=320;
        var timerImg=setInterval(()=>{
            // 第一个弹幕图片
            left1-=10;
            $($imgs[0]).css("left",left1);
            if(left1<=-320){
                left1=320;
            }
            // 第二个弹幕图片
            left2-=10;
            $($imgs[1]).css("left",left2);
            if(left2<=-320){
                left2=320;
            }
        },1000/6);
         
        clearInterval(timer);
    }
},100);
