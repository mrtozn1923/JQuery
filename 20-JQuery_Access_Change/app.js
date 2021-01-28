// $.noConflict();
// jQuery(function() {
//   jQuery("#btn-jquery").click(function(){
//     jQuery("p").text("Merhaba");
//   });
// });

// const jq=$.noConflict();
// jq(function() {
//   jq("#btn-jquery").click(function(){
//     jq("p").text("Merhaba");
//   });
// });


const jq=$.noConflict();
jq(function($) {
  $("#btn-jquery").click(function(){
    $("p").text("Merhaba");
  });
});