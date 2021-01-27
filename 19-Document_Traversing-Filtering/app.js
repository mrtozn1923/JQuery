$(function() {
  //first, last, eq, filter, not
  // $("div").first().css({"color":"red","border":"2px solid red"});
  // $("div").last().css({"color":"red","border":"2px solid red"});
  // $("div").eq(0).css({"color":"red","border":"2px solid red"});
  // $("div").eq(1).css({"color":"red","border":"2px solid red"});
  // $("div").eq(2).css({"color":"red","border":"2px solid red"});
  // $("div").eq(3).css({"color":"red","border":"2px solid red"});
  // $("p").filter("p").css({"color":"red","border":"2px solid red"});
  // $("p").filter(".paragraf").css({"color":"red","border":"2px solid red"});
  $("p").not(".paragraf").css({"color":"red","border":"2px solid red"});
});