function isSelected(arg){
  if(arg=="o" ||arg=="x"){
    return true;
  } else {
    return false;
  }
}
function checkWin(arg) {
  var myArr = ["123", "456", "789", "147", "258", "369", "159", "753"];
  var result = "notWon";
  for (var m in myArr) {
    var temp = myArr[m].split("");
    if (arg.indexOf(temp[0]) >= 0 && arg.indexOf(temp[1]) >= 0 && arg.indexOf(temp[2]) >= 0) {
      result = "won";
    }
  }
  return result;
}
function reset() {
  $("#1").html("<span class='hide'>1</span>");
  $("#2").html("<span class='hide'>2</span>");
  $("#3").html("<span class='hide'>3</span>");
  $("#4").html("<span class='hide'>4</span>");
  $("#5").html("<span class='hide'>5</span>");
  $("#6").html("<span class='hide'>6</span>");
  $("#7").html("<span class='hide'>7</span>");
  $("#8").html("<span class='hide'>8</span>");
  $("#9").html("<span class='hide'>9</span>");
}
function puto(arg1, arg2) {
  var a = arg1 + arg2;
  if (a.length == 9) {
    return "draw";
  }

  function unselected() {
    var original = "123456789";
    var orignArr = original.split("");
    var aArr = a.split("");
    for (var b in aArr) {
      for (var c in orignArr) {
        if (aArr[b] == orignArr[c]) {
          delete orignArr[c];
        }
      }
    }
    return orignArr.filter(function(a) {
      return a !== null;
    });

  }
  var remainingArr = unselected();

  function choose(arr) {
    var min = 0;
    var max = arr.length;

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    var index = getRandomInt(min, max);
    return arr[index];
  }
  var select = choose(remainingArr);
  return select;
}
function playerWon(){
  alert("Player won!!");
}
function compWon(){
  alert("Comp won!!");
}
function itsDraw(){
  alert("It is a Draw!!");
}
$(function(){
  var player=0;
  var comp =0;
  var draw =0;
  var combox="";
  var comboo="";
  var timeStamp;
  var timer;
  function reseter(){
    reset();
    combox="";
    comboo="";
  }
 $("#1, #2, #3, #4, #5, #6, #7, #8, #9").click(function(){
   var a = $(this).text();
   if(isSelected(a)==false){     
     $(this).text("x");
     combox+=a;
   }
   if(checkWin(combox)=="won"){
     $(this).text("x");
     // alert("player won");
     player++;
     $("#p").text(player);
     timer= window.setTimeout(playerWon, 500);
     timeStamp= window.setTimeout(reseter,1000);
   } 
   var b= puto(combox, comboo);
   if(b=="draw"){
//      draw
     if(checkWin(combox)=="won"){
     $(this).text("x");

     } else {
     draw++;
     $("#d").text(draw);
     timer= window.setTimeout(itsDraw, 500);
     timeStamp= window.setTimeout(reseter,1000);
     }
   } else{
     var c= "#"+b;
     $(c).text("o");
     comboo+=b;     
   }
   if(checkWin(comboo) =="won"){
//      comp won
     comp++;
     $("#c").text(comp);
     timer= window.setTimeout(compWon, 500);
      timeStamp= window.setTimeout(reseter,1000);
   }
 });
});