window.onload=function(){
  var test = document.getElementsByClassName("a");
  var test2 = test[0].getElementsByClassName("b");
    
  if(test2.length == 2){
    test2[0].addEventListener('keyup',function(){
      console.log("2番");
    });
    test2[1].addEventListener('keyup',function(){
      console.log("2番");
    });
  }
  
  if(test2.length == 1){
    test2[0].addEventListener('keyup',function(){
      console.log("1番");
    });
    
  }
}