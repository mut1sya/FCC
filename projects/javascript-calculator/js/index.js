function add(a, b){
  a= parseFloat(a);
  b= parseFloat(b);
  return (a+b).toString();
}
function minus(a, b){
  a= parseFloat(a);
  b= parseFloat(b);
  return (a-b).toString();
}
function multiply(a, b){
  a= parseFloat(a);
  b= parseFloat(b);
  return (a*b).toString();
}
function divide(a, b){
  a= parseFloat(a);
  b= parseFloat(b);
    return (a/b).toString();
}
function clearOne(string){
  return string.slice(0, -1);
}
function getSymbol(regex, str){
    var match= str.match(regex);
    var index =str.indexOf(match[0]);
    return str.charAt(index);
  }
function calculate(result){
  var regex = /[+\-\/\*=]/g;
    if(regex.test(result)===false){
      
       return result;
     } else {
       var operation = getSymbol(regex, result);
       var arr = result.split(operation);
       var a = arr[0];
       var b = arr[1];
       switch (operation){
         case "+":
           result = add(a, b);
           break;
         case "-":
           result = minus(a, b);
           break;
         case "*":
           result = multiply(a, b);
           break;
         case "/":
           result = divide(a, b);
           break;
       }
       return result;
     }
}

$(function(){

  $("#0, #1, #2, #3, #4, #5, #6, #7, #8, #9, #dot").click(function(){
    
    $("#results").append($(this).val());
  });
  $("#clearAll").click(function(){
    $("#results").html("");
  });
  $("#clear").click(function(){    
    var myresult = $("#results").html();
    $("#results").html(clearOne(myresult));
  });
  $("#minus, #divide, #times, #plus").click(function(){
    var contents = $("#results").text();
    var ans=calculate(contents);
    ans+=$(this).val();
     $("#results").text(ans);
  });
  $("#equal").click(function(){
   var contents = $("#results").text();
   var ans=calculate(contents);
   $("#results").text(ans);
  });
});