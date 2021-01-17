$(function() {
    //  $("#btn1").click(function(){
    //      $("#paragraf1").text("Merhaba <b>Dünya<b>");
    //  });
     $("#btn2").click(function(){
        $("#paragraf2").html("Merhaba <b>Dünya<b>");
    });
    $("#btn3").click(function(){
        $("#fullName").val("Mehmet Özen");
    });
    // $("#btn4").click(function(){
    //     $("#google").attr("href","https://www.google.com");
    // });
    // $("#btn4").click(function(){
    //     $("#google").attr({"href":"https://www.google.com","title":"Google"});
    // });
    $("#btn1").click(function(){
        $("p").text(function(i,origText){
            return "Old Text:"+origText+"New Text: Merhaba <b>Dünya<b>"+"index:"+i
        });
    });
    $("#btn4").click(function(){
        $("#mertozen").attr("href",function(i,origValue){
            return origValue+"/yazilar";
        });
    });
});