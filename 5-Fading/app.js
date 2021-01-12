// $(function() {
//     $("#fadeIn").click(function() {
//         $(".box-red").fadeIn();
//         $(".box-blue").fadeIn("slow",function(){
//             alert("gösterildi");
//         });
//         $(".box-green").fadeIn(3000);
//     });
//     $("#fadeOut").click(function() {
//         $(".box-red").fadeOut();
//         $(".box-blue").fadeOut("slow");
//         $(".box-green").fadeOut(3000);
//     });
//     $("#fadeToggle").click(function() {
//         $(".box-red").fadeToggle();
//         $(".box-blue").fadeToggle("slow");
//         $(".box-green").fadeToggle(3000);
//     });
//     $("#fadeTo").click(function() {
//         $(".box-red").fadeTo("fast",0.20);
//         $(".box-blue").fadeTo("fast",0.4);
//         $(".box-green").fadeTo("fast",0.8);
//     });
// });

//-----------------------------
$(function() {

    $("#btnPanel").click(function(){
        $("#panel").fadeToggle(1500,function(){
            alert("panel durumu değişti");            
        })
    })

})