$(function(){
    $("#slide-down").click(function(){
        $(".panel").slideDown(1000,function(){
            alert("Panel Açıldı");
        });
    })
    $("#slide-up").click(function(){
        $(".panel").slideUp(1000,function(){
            alert("Panel Kapandı");
        });
    })
    $("#slide-toggle").click(function(){
        $(".panel").slideToggle(1000,function(){
            alert("Panel Durumu Değişti");
        });
    })
})