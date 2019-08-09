// 右侧部分
// 手机号或邮箱验证
// 动态验证输入框中的内容
$("input:text").on("input",function(){
    $txt=$(this);
    var reg=/^\d{11}$/;
    var reg1=/^[a-z0-9]+([a-z0-9]+)@[a-z0-9]+\.[a-z]{2,}$/i;
    var $ptips=$txt.nextAll("div").children();
    if(!$txt.val()){
        $ptips.html("请输入注册时用的邮箱或者手机号呀");
    }else if(reg.test($txt.val())||reg1.test($txt.val())){
        console.log(1111)
        $ptips.html("格式正确");
        $txt.addClass("success");
    }else{
        $ptips.html("格式不正确");
        $txt.removeClass("success");
    }
})
// 失去焦点时，判断是否为空
.blur(function(){
    $txt=$(this);
    var $ptips=$txt.nextAll("div").children();
    if(!$txt.val()){
        $ptips.html("请输入注册时用的邮箱或者手机号呀");
    }
});
// 密码验证函数
function vali(){
    var $ptips=$txt.nextAll("div").children();
    if(!$txt.val()){
        $ptips.html("喵，你没输入密码么？");
        $txt.removeClass("success");
    }else{
        $ptips.html("");
        $txt.addClass("success");
    }
}
// 密码验证
// 动态验证密码是否为空
$("input:password").on("input",function(){
    $txt=$(this);
    vali();
})
.blur(function(){
    $txt=$(this);
    vali();
});
// 登录点击事件
$(".btn-login").click(function(){
    if($(".success").length==2){
        alert("恭喜你登录成功");    }
})
$.ajax({
    url:"../rl_header.html",
    type:"get",
    success: function(result) {
        $("#header").html(`${result}`);
    }
});
$.ajax({
    url:"../footer.html",
    type:"get",
    success: function(result) {
        $("#footer").html(`${result}`);
    }
  });