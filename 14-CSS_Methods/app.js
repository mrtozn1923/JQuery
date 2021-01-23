$(function(){
    //css özelliği alma
    $("#btn-get-css").click(function(){
        //ilk paragraf etiketi için arkaplan rengini alır
        var css=$("p").css("background-color");
        alert(css);
    });
    $("#btn-set-css").click(function(){
        $("p").css("background-color","blue");
        $("p").css("background-color","rgba(255,255,0,1)");
    });
    $("#btn-set-multi-css").click(function(){
        $("#p1").css({"background-color":"blue","font-size":"25pt"});
        $("#p2").css({"background-color":"rgba(255,255,0,1)","color":"red"});
        //Saf(Vanilla) JS
        document.getElementById("p2").style.fontSize="25pt";
    });
});