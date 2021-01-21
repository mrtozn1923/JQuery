$(function(){
    $("#btn-add-class").click(function(){
        $(".box").addClass("box-green");
    });
    $("#btn-remove-class").click(function(){
        $(".box").removeClass("box-green");
    });
    $("#btn-toggle-class").click(function(){
        $(".box, p").toggleClass("box-blue box-border");
    });
});