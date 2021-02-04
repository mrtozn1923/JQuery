$(function() {
   $("button").click(function(){
      // console.log($("li"));
      // console.log($("li").toArray());
      // console.log($("li").toArray()[0]);
      // console.log($("ul").toArray()[0].innerHTML);
      // console.log($("ul").toArray()[0].innerText);

      let listItems=$("li").toArray();
      for(let i=0;i<listItems.length;i++){
         alert(listItems[i].innerText);
      }
   });
});