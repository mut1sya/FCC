var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getChannelInfo() {
  channels.forEach(function(channel) {
    function makeURL(type, name) {
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
    }
    $.getJSON(makeURL("streams", channel), function(data) {
      var game= "";
      var status= "";
      if (data.stream === null) {
        game = "Offline";
        status = "offline";
      } else if (data.stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = data.stream.game;
        status = "online";
      }
      $.getJSON(makeURL("channels", channel), function(data) {
        var logo="";
        if(data.logo===null){
          logo = "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F"; 
        } else {
          logo = data.logo;
        }
        var logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
        var name = data.display_name != null ? data.display_name : channel;
        var description = status === "online" ? ': ' + data.status : "";
        var html = "<div class='row "+status+"'>"+
                "<div class='col-sm-2 col-xs-2'>"+
                  "<img src='" + logo + "' class='logo'>"+
                "</div>"+
                "<div class='col-sm-2 col-xs-2'>"+
                  "<a href='" +data.url + "' target='_blank'>" + name + "</a>"+
                "</div>"+
                "<div class='col-sm-2 col-xs-2'>"+status+"</div>"+
                "<div class='col-sm-6 col-xs-6'>"+description+"</div>"+
              "</div>";
        status === "online" ? $("#mainwork").prepend(html) : $("#mainwork").append(html);
      });
    });
  });
};

$(document).ready(function() {
  getChannelInfo();
  $("#all").click(function(){
    $(".offline").show();
    $(".online").show();
  });
  $("#online").click(function(){
    $(".offline").hide();
    $(".online").show();
  });
  $("#offline").click(function(){
    $(".offline").show();
    $(".online").hide();
  });
  
  
});