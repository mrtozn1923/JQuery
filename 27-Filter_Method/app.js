$(function() {
  $("#inptFilter").on("keyup",function(){
    // console.log($(this).val().toLowerCase());
    var name=$(this).val().toLowerCase();
    // $("#persons tr").filter(function(){
    //   $(this).toggle($(this).text().toLowerCase().indexOf(name)>-1);
    // });
    $("#persons tr td:nth-child(1)").filter(function(){
      $(this).parent().toggle($(this).text().toLowerCase().indexOf(name)>-1);
      // this.parent(); //hatalı kullanım
    });
  });
});