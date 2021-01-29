$(function() {
 $("#btn-run").click(function(){
    // $("li").each(function(index,element){
    //   $(this).prepend((++index)+"-");
    // });
    // var liste=["Kırmızı","Mavi","Yeşil"];
    // $.each(liste,function(index,value){
    //   $("div").append("<p>"+(++index)+" "+value+"</p>");
    // });

    // var liste=["Kırmızı","Mavi","Yeşil"];
    // $.each(liste,function(index,value){
    //   $("div").append("<p>"+(++index)+" "+value+"</p>");
    //   if(index==2) return false;
    // });

   var person={
     name:"Mert",
     surname:"Özen",
     age:"26"
   };
   $.each(person,function(key,value){
    $("div").append("<li>"+key+":"+value+"</li>");
   }); 
 });
});