$(function(){
let btn = $("form #submitBtn");

btn.click(function(){
    if($("form input[type='text']").val().trim().length == 0) {
        alert("아이디를 확인해주세요.");
    } else if($("form input[type='password']").trim().length == 0) {
        alert("비밀번호를 확인해주세요.");
    } else {
        $("form").attr("action", "https://www.daum.net");
    }
});


});