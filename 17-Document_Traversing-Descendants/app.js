$(function() {
   //children()->seçilen ögenin tüm doğrudan(1.seviye) alt öğelerini alır
   //find()->seçilen ögenin alt ögelerini son alt ögeye kadar alır

//   $(".descendants").children().css({"color":"red","border":"2px solid red"});
//   $(".descendants").children("div#first").css({"color":"red","border":"2px solid red"});

//   $(".descendants").find("*").css({"color":"red","border":"2px solid red"});;
//   $(".descendants").find("span").css({"color":"red","border":"2px solid red"});
//   $(".descendants").children("span").css({"color":"red","border":"2px solid red"});

// console.log($(".descendants").find("span"));
let spans=$(".descendants").find("span");
console.log(spans);
console.log(spans[0]);
console.log(spans[1]);
});