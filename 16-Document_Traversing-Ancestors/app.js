$(function() {
   //parent() parents() parentsUntil()
//    $("span").parent().css({"color":"red","border":"2px solid red"});
//    $("span").parents().css({"color":"red","border":"2px solid red"});
//    $("span").parents("ul").css({"color":"red","border":"2px solid red"});
   $("span").parentsUntil("div").css({"color":"red","border":"2px solid red"});
});