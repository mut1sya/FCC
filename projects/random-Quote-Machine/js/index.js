
$(function(){
var myquotes =[
["The future belongs to those who believe in the beauty of their dreams.", "Eleanor Roosevelt"],
["A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.", "Chuck Norris"],
["You learn to speak by speaking, to study by studying, to run by running, to work by working; in just the same way, you learn to love by loving.", "Anatole France"],
["Fortune befriends the bold.", "John Dryden"],
["You can fool some of the people all of the time, and all of the people some of the time, but you can not fool all of the people all of the time.", "Abraham Lincoln"],
["What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.", "Daisaku Ikeda"],
["Good thoughts are no better than good dreams, unless they be executed.", "Ralph Emerson"],
["If you correct your mind, the rest of your life will fall into place.", "Lao Tzu"],
["If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others.", "Anne Lindbergh"],
["It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him.", "Max Planck"],
["You cannot change anything in your life with intention alone, which can become a watered-down, occasional hope that you'll get to tomorrow. Intention without action is useless.", "Caroline Myss"],
["Not only to say the right thing in the right place, but far more difficult, to leave unsaid the wrong thing at the tempting moment.", "Sala"]
];
var length = myquotes.length;
var quote = "";
  $("#button").click(function(){   
    $("#container").empty();
    var randomNumber = Math.floor(Math.random() * length); 
    quote = myquotes[randomNumber][0]+"by "+myquotes[randomNumber][1];
    $("#container").html(quote);
 });
 $("#tweet").click(function(){
  $("#tweet a").attr("href","https://twitter.com/intent/tweet?text="+quote);
  });
});