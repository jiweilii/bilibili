//********* 轮播图*******************
// 事件委托 ，给所有的小图标都绑定点击事件
$("#carousel>ul.trig").on("click","span",function(){
    $span=$(this);
    var timer=$span.attr("data-time");
    times=timer;
     $("#carousel>ul.imgul").css("margin-left",(timer-1)*(-440));
      console.log( $("#carousel>ul.imgul").css("margin-left",(timer-1)*(-440)))
     $span.addClass("on").removeClass("spanhover").siblings("span").removeClass("on");
}).on("mouseenter",":not(span.on)",function(){
    $(this).addClass("spanhover");
}).on("mouseleave",":not(span.on)",function(){
    $(this).removeClass("spanhover");
});

// 图片滚动函数
function moveTo(){
    $("#carousel>ul.imgul").css("margin-left",times*(-440));
    times++;
    if(times==5){
        setTimeout(()=>{times=0})
    }
    $($("#carousel>ul.trig>span")[times-1]).addClass("on").siblings("span").removeClass("on");
}
var times=1;
// 设置周期定时器，调用图片滚动函数
setInterval(()=>{
    moveTo();
},3000)

// *************右侧 侧边栏的点击事件**********
$(".right_div>.right_ul").on("click","li",function(){
    var $li=$(this);
    $li.addClass("tri").siblings("li").removeClass("tri");
})