$(function() {
    $("#btn1").click(function() {
      $("div").data("status","true");
    });
    $("#btn2").click(function() {
      alert($("div").data("status"));  
    });
    $("#btn3").click(function() {
      $("div").removeData("status");
    });
});