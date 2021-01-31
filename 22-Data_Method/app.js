$(function() {
    $("#btn1").click(function() {
      //  $("div").data("data", "Mert Özen");
      //  $("div").data("data2", "Mehmet Özen");
      let obj=new Object();
      obj.data="Mert Özen";
      obj.data2="Mehmet Özen";
      $("div").data(obj);
    });
    $("#btn2").click(function() {
        // alert($("div").data("data"));
        // alert($("div").data("data2"));
        // alert($("div").data());
        // console.log($("div").data());
        console.log($("div").data("data"));
        console.log($("div").data("data2"));
        console.log($("div").data());
    });
});