//append()->seçili eleman içinde en sona ekler
//prepend()->seçili eleman içinde en başa ekler
//after()->seçili eleman dışında en sona ekler
//before()->seçili eleman dışında en başa ekler
$(function() {
  $('#btn-append').click(function(){
    $('.box-red').append($('<div class="box box-green"></div>'));
  });  
  $('#btn-prepend').click(function(){
    $('.box-red').prepend($('<div class="box box-green"></div>'));
  }); 
  $('#btn-after').click(function(){
    $('.box-red').after($('<div class="box box-green"></div>'));
  });
  $('#btn-before').click(function(){
    $('.box-red').before($('<div class="box box-green"></div>'));
  });
  $('#btn-multi-elements').click(function(){
    
    var p1="<p>P1</p>"; //HTML ile eleman oluşturma
    var p2=$("<p></p>").text("P2"); //Jquery ile eleman oluşturma
    var p3=document.createElement("p");//DOM ile eleman oluşturma
    p3.innerText="P3";
    $("#multi-elements").append(p1,p2,p3);//Çoklu eleman ekleme

  });
});