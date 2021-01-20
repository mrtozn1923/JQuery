//remove() ->seçili eleman ve altındaki(içindeki) elemanları siler
//empty() ->seçili elemanın altındaki(içindeki) elemanları siler
$(function() {

    $("#btn-remove").click(function() {
        $(".box").remove();
    });
    $("#btn-empty").click(function() {
        $(".box").empty();
    });
    $("#btn-filter").click(function() {
        $("p").remove(".p1");
    });
    $("#btn-filter2").click(function() {
        $("p").remove(".p1, .p2");
    });

});