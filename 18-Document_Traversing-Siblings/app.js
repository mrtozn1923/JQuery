$(function() {
  //siblings->tüm kardeşleri seçer
  //next->sonrasında gelen kardeşi seçer
  //nextAll->sonrasında bulunan tüm kardeşleri seçer
  //nextUntil->iki eleman arasında bulunan kardeşleri seçer
  //prev, prevAll, prevUntil

//   $("h2").siblings().css({"color":"red","border":"2px solid red"});
//   $("h2").siblings("p").css({"color":"red","border":"2px solid red"});
//   $("h2").next().css({"color":"red","border":"2px solid red"});
//   $("h2").nextAll().css({"color":"red","border":"2px solid red"});
//   $("h2").nextUntil("p").css({"color":"red","border":"2px solid red"});
//   $("h2").prev().css({"color":"red","border":"2px solid red"});
//   $("h2").prevAll().css({"color":"red","border":"2px solid red"});
//   $("h2").prevAll("h1").css({"color":"red","border":"2px solid red"});
  $("h2").prevUntil("p").css({"color":"red","border":"2px solid red"});
});