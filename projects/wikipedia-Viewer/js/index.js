var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=15&search=";

function insertHTML(title, excerpt, link){
  var html = "<div class='results'><a href='"+link+"' target='_blank'><h2>"+title+"</h2></a><p>"+excerpt+"</p></div>";
  $("#results").append(html);
}
function search(str){
$.ajax({
  url: url+str,
  jsonp: "callback",
  dataType: "jsonp",
  success: function(resp){
    $("#results").empty();
    for(var i = 0; i<resp[1].length; i++){
      insertHTML(resp[1][i], resp[2][i], resp[3][i]);
    }
  }
});
}



$(function(){
	$("#aftersearch").hide();
	$("#searchIcon").click(function(){
		var searchItem = $("#search").val();
		if(searchItem.length>0){			
		$("#searchSection").remove();
		$("#search0").val(searchItem);
		$("#aftersearch").show();		
		search(searchItem);
	}
	});
  $("#icon1").click(function(){
    var searchItem = $("#search0").val();
		if(searchItem.length>0){				
		search(searchItem);
    }
  });
});