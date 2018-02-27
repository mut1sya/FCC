function changeStart(){
  var start = $("#start").text();
  if (start=="off") {
    start = "on";
    $("#start").text(start);
  } else {
    $("#start").text("off");    
  }  

}

function changeStrict(){
  var strict = $("#strict").text();
  if(strict == "strict off"){
    strict = "strict on";
    $("#strict").text(strict);
  } else{
    $("#strict").text("strict off")
  }
}

function setColor(){
  var colorNumber = Math.floor(Math.random() * (5 - 1) + 1);
  var colorTile ="";
  switch(colorNumber){
    case 1:
      colorTile="red";
      break;
    case 2:
      colorTile="blue";
      break;
    case 3:
      colorTile="yellow";
      break;
    case 4:
      colorTile="green";
      break; 

  }
  console.log(colorTile);
  return colorTile;
}

 


$(function(){
  var tileArray = [];
  var playerArray =[];
  var playerTurn = false;
  var index = 0;
  var level = 1;


  function reset(){
    tileArray = [];
    playerArray =[];
    playerTurn = false;
    index = 0;
    level = 1;
    $("#level").text(level);
    simulate();
    generate();
  }

  function generate(){
      if(tileArray.length>20){
        alert("player won");
        $("#level").html("0");
      }
      tileArray.push(setColor());
    }
  function simulate(){ 
    setTimeout(function() {                               
      for(var i in tileArray) {                 
        (function(i) { 
          setTimeout(function() {
               switch(tileArray[i]){
                case "red":
                    $("#red").fadeOut(200).fadeIn(200);
                    $("#1").trigger("play");        
                  break;
                case "yellow":
                  //what to do
                    $("#yellow").fadeOut(200).fadeIn(200);
                    $("#2").trigger("play");       
                  break;
                case "blue":
                  //what to do
                    $("#blue").fadeOut(200).fadeIn(200);
                    $("#3").trigger("play");
                  break; 
                case "green":
                    //what to do 
                    $("#green").fadeOut(200).fadeIn(200);
                    $("#4").trigger("play");     
                  break;
            }     
          
        }, i * 800);
        })(i);
                                                                               
      }    
      
    }, 1000); 
    playerTurn = true;  
  }
  $("#start").click(function(){
    
  
    changeStart();
    generate();
    simulate();
    console.log(tileArray);
    console.log(playerTurn);
  });
  $("#red, #blue, #green, #yellow").click(function(){
    var current= $(this).attr("id"); 
   
  function playerMove(){
    var strict = $("#strict").text();
    if(playerTurn){
      var now = "#"+current;
      console.log(now);
      $(now).fadeOut(200).fadeIn(200);
      switch(current){
        case "red":
          $("#1").trigger("play"); 
          break;
        case "yellow":
          $("#2").trigger("play"); 
          break;
        case "blue":
          $("#3").trigger("play"); 
          break;
        case "green":
          $("#4").trigger("play"); 
          break;
      }
      playerArray.push(current);
      console.log(playerArray);
      if(strict==="strict on" && playerArray[index]!==tileArray[index]){
        reset();
      }
      if(playerArray[index]!==tileArray[index]){
        alert("wrong input do repeat");
        setTimeout(simulate, 1500);
        index = 0;
        playerArray = [];        
      } else{
        if(index===tileArray.length-1){
          //proceed
          playerTurn = false;                                
          playerArray = [];                                         
          level++;                                              
          $("#level").html(level);
          index = 0;
          generate();
          simulate();
        }
        else if(index!==tileArray.length-1){
          index++;
          return;
        }
      }

    }
  }
  playerMove();
  });
  $("#restart").click(function(){
    reset();
  });
  $("#strict").click(function(){
    changeStrict();
  });

  
});