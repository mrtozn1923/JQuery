//  Document Object Model - Doküman Nesne Modeli
// text() html() val()
$(function() {
    $("#btnText").click(function() {
        alert("Text:" + $("#paragraf").text());
    });
    $("#btnHTML").click(function() {
        alert("HTML:" + $("#paragraf").html());
    });
    $("#btnValue").click(function() {
        alert("Value:" + $("#inptName").val());
    });
    $("#btnAttribute").click(function() {
        alert("HREF(Attribute):" + $("#google").attr("href"));
    });
});