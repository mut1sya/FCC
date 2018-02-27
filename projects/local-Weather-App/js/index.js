function updateBackground(temparature){
	if (temparature<=0) {
		$("body").css("background-color", "#323c84");
	}
	else if (temparature<=5){
		$("body").css("background-color", "#61647f");
	}
	else if (temparature<=10){
		$("body").css("background-color", "#767885");
	}	
	else if (temparature<=15){
		$("body").css("background-color", "#46926c");
	}
	else if (temparature<=20){
		$("body").css("background-color", "#378c5d");
	}
	else if (temparature<=25){
		$("body").css("background-color", "#247323");
	}
	else if (temparature<=30){
		$("body").css("background-color", "#6aa014");
	}
	else if (temparature<=35){
		$("body").css("background-color", "#947d0a");
	}
	else if (temparature<=40){
		$("body").css("background-color", "#903306");
	}
	else if (temparature<=45){
		$("body").css("background-color", "#981610");
	}
	else if (temparature<=50){
		$("body").css("background-color", "#790101");
	}
	else if (temparature>50){
		$("body").css("background-color", "#060606");
	}
}
$(function(){
	$.getJSON("http://ip-api.com/json",function(data){
		var city = data.city;
		var country= data.country;
		$("#city").html(city);
		$("#country").html(country);
		$.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=ae9dce99108ca0cd16b3ccb0c291eadd", function(respose){
    		var temp = Math.round(respose.main.temp-273.15);
    		var icon = "http://openweathermap.org/img/w/" + respose.weather[0].icon + ".png";
    		var humidity =respose.main.humidity;
    		var windspeed =respose.wind.speed;
    		var windDirection =respose.wind.deg;
    		var pressure = respose.main.pressure;
    		var description = respose.weather[0].description;
    		$("#description").html(description);
    		$("#humidity").html(humidity);
    		$("#windspeed").html(windspeed);
    		$("#windDirection").html(windDirection);
    		$("#pressure").html(pressure);
    		$("#temp").html(temp+"&#8451;");
    		$("#icon").html('<img src="'+icon+'" >');
    		$("#faren").click(function(){
    			var myTemp = ((temp*9)/5)+32;
    			$("#temp").html(myTemp+"&#8457;");
    		});
			$("#degrees").click(function(){
    			$("#temp").html(temp+"&#8451;");
    		});
			updateBackground(temp);
 		 });
	});
	
});