$(function() {
    $("#btn-dimensions").click(function() {
        var width = 0;
        var height = 0;
        // width=$(".box").width();
        // height=$(".box").height();
        // width=$(".box").innerWidth();
        // height=$(".box").innerHeight();
        // width=$(".box").outerWidth();
        // height=$(".box").outerHeight();
        // width=$(".box").outerWidth(true);
        // height=$(".box").outerHeight(true);
        // width=$(window).width();
        // height=$(window).height();
        width = $(document).width();
        height = $(document).height();
        //window: viewport dediğimiz görünen alanın boyutlarını verir
        //document: dokümanın tam boyutunu verir eğer sayfanızda dikey veya yatay kaydırma çubukları çıkıyorsa burada tam genişlik ve yükseklik değerini document verir.
        alert("genişlik:" + width + " yükseklik:" + height);
    });
    $("#btn-resize").click(function() {
        var width=$(".box").width();
        var height=$(".box").height();
        $(".box").width(width+800).height(height+500);
    });
});