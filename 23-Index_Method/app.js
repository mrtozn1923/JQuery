$(function() {
    $("li").click(function() {
        alert($(this).index());
    });
    $("button").click(function(){
      // alert($(".meyve").index($("#favori")));
      alert($("#favori").index());
    });
});