// 用户名和密码验证函数
function vali($txt,reg,minlen,maxlen,txtname){
  // 找到要修改的span标签
  var $pname=$txt.next();
  // 根据格式判断，修改span的提示内容
  if(!$txt.val()){
    $pname.html(`请告诉我你的${txtname}吧`);
    $txt.removeClass("success");
  }else if($txt.val().length<=3){
    $pname.html(`你的${txtname}过短，不允许注册！`);
    $txt.removeClass("success");
  }else if($txt.val().length>=16){
    $pname.html(`你的${txtname}过长，不允许注册！`);
    $txt.removeClass("success");
  }else if(!reg.test($txt.val())){
    $pname.html(`${txtname}包含系统禁止的字符！`);
    $txt.removeClass("success");
  }else{
    $pname.html(`${txtname}格式正确`);
    $txt.addClass("success");
  }
}
// *************用户名***********
// 昵称验证
$("input[name=uname]").on("input",function(){
  vali($(this),/^\w{3,16}$/,3,16,"昵称")
});
// *************密码***********
// 密码安全性验证
$(":password").on("input",function(){
  var $safe=$(this).parent().prev();
  // 移除焦点时，显示安全系数模块
  $safe.removeClass("opacity-none");
  // 根据密码的长度分情况
  if($(this).val().length<=5){
    $safe.children(":nth-child(2)").nextAll().addClass("dis-none");
    $safe.children(":last-child").html("简单")
  }else if($(this).val().length<=10){
    $safe.children(":nth-child(2)").nextAll().removeClass("dis-none");
    $safe.children(":nth-child(3)").nextAll().addClass("dis-none");
    $safe.children(":last-child").html("一般")
  }else{
    $safe.children(":nth-child(3)").nextAll().removeClass("dis-none");
    // $safe.children(":nth-child(3)").nextAll().addClass("dis-none");
    $safe.children(":last-child").html("安全")
  }
  // 密码格式验证-调用验证函数
  vali($(this),/^\w{3,16}$/,3,16,"密码");
})

// *************手机号************
$("input[name=uphone]").on("input",function(){
  var reg=/^\d{11}$/;
  vali($(this),reg,11,11,"手机号")
});

$("button.btn-yanzhengma").click(function(){
  var valCode=parseInt(Math.random()*10000);
  alert(`【哔哩哔哩网】${valCode}（验证码，请完成验证），请勿向他人泄露，如非本人操作，请忽略本短信`);
  $btn=$(this);
  $inpCode=$btn.prev();
  $inpCode.on("input",function(){
    if($inpCode.val()==valCode){
      $btn.next().html("验证码正确");
      $inpCode.addClass("success");
    }else{
      $btn.next().html("验证码错误");
      $inpCode.removeClass("success");
    }
  })
});
  // 点击注册按钮
$("button.btn-reg").click(function(){
  if(!$("button.btn-reg").prop("disabled"))
  {
    if(($("input.success").length==4)&&($("input:checkbox").prop("checked"))){
      alert("恭喜你，注册成功！")
    }
  }
});
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