$(function() {
    //$(selector).stop(stopAll,goToEnd)
    $(".btn-blue").click(function(){
        $(".box").animate({left:'+=100px'},2000);
        $(".box").animate({fontSize:'24pt'},2000);
    });
    $(".btn-red").click(function(){
        $(".box").stop();
    });
    $(".btn-green").click(function(){
        $(".box").stop(true);
    });
    $(".btn-orange").click(function(){
        $(".box").stop(false,true);
    });
});