$(function() {
    // $("#hide").click(function() {
    //     $("p").hide();
    // });
    // $("#show").click(function() {
    //     $("p").show();
    // });
    // $("#toggle").click(function() {
    //     $("p").toggle();
    // });

    $("#hide").click(function() {
        $("p").hide(1000,function(){
            alert("gizlendi");
        });
    });
    $("#show").click(function() {
        $("p").show("slow",function(){
            alert("gösterildi");
        });
    });
    $("#toggle").click(function() {
        $("p").toggle("fast",function(){
            alert("durum değiştirildi");
        });
    });
});