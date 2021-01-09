// https://www.w3schools.com/jquery/trysel.asp

$(document).ready(function(){
    // $("button").click(function(){
    //     $("p").hide();
    // });
    // $("#btn-hide").click(function(){
    //     $(".paragraph").hide();
    // });
    $("#btn-hide").click(function(){
        $("ul>li>ul>li:first-child").hide();
    });
    
});