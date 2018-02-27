function add(minutes){
  return ++minutes;
}
function less(minutes){
  if(minutes>1){
    return --minutes;
  } else {
    return "can not less further than that";
  }
}
function switcher(msg){
  if(msg=="work"){
    $("#message").text("break");
    $("#minutes").text("5");
    $("#seconds").text("00");
    $("#box").css("background-color", "#4d90fe");
  } else {
    $("#message").text("work");
    $("#minutes").text("25");
    $("#seconds").text("00");
    $("#box").css("background-color", "#999");    
  }
 }
function timeman(msg, min, sec){
  var time = setInterval(function(){
    if(min==0 && sec==0){
     clearInterval(time);
      switcher(msg);
      $("#less, #add").attr("disabled", false);
    }
    if(min>0 && sec<=0){
      min--;
      sec = 60; 
      $("#minutes").text(min);           
    }
    if(sec>0){
     $("#seconds").text(--sec);
    }
   
  }, 1000);
}
$(function(){
  $("#less").click(function(){
    var min = $("#minutes").text();
    var res  = less(min);
    if(res=="can not less further than that"){
      $("#error").text(res);
    } else{
      $("#minutes").text(res);
    }
  });
  $("#add").click(function(){
    var min = $("#minutes").text();
    min = add(min);
    if(min>1){
      $("#error").text("");
    }
    $("#minutes").text(min);
  });
  $("#start").click(function(){
    $("#less, #add").attr("disabled", true);
    var msg=$("#message").text(); 
    var min = $("#minutes").text();
    var sec = $("#seconds").text();
   timeman(msg, min, sec); 
  });
});