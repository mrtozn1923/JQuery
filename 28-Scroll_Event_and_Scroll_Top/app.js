$(function() {
  $(document).on("scroll",function(){
    // console.log($(this).scrollTop());
    if($(this).scrollTop()>=100){
      $(".navbar").removeClass("bg-transperent");
      $(".navbar").addClass("bg-darkslategray");
    }else{
      $(".navbar").removeClass("bg-darkslategray");
      $(".navbar").addClass("bg-transperent");
    }
  });
  $("#btn-scroll").click(function(){
    $(document).scrollTop(200);
  }); 
});