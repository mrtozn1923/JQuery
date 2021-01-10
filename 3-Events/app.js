// https://www.w3schools.com/jquery/jquery_ref_events.asp
//https://api.jquery.com/category/events/
// https://api.jquery.com/keypress/
$(document).ready(function() {
    //    $("p").click(function(){
    //         $(this).hide();
    //    });
    // $("p").dblclick(function() {
    //     $(this).hide();
    // });
    // $("p").mouseenter(function() {
    //     $(this).hide();
    // });
    // $("p").mouseleave(function() {
    //     $(this).hide();
    // });
    // $("p").mousedown(function() {
    //     $(this).hide();
    // });
    // $("p").mouseup(function() {
    //     $(this).hide();
    // });
    //mouseenter ve mouseleave
    // $("div").hover(function() {
    //     //mouseenter
    //     $(this).hide();
    // },function(){
    //     // mouseleave
    //     $(this).show();
    // });

    // $("input").focus(function() {
    //     $("div").hide();
    // });
    // $("input").blur(function() {
    //     $("div").show();
    // });

    // $("div").on("click",function(){
    //     alert("Tıklandı");
    // });
    $("div").on({
        click:function(){
            alert("click");
        },
        mouseenter:function(){
            $("input").hide();
        },
        mouseleave:function(){
            $("input").show();
        }
    });
});