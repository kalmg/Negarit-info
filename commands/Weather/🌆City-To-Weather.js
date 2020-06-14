/*CMD
  command: 🌆City-To-Weather
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Weather

  <<ANSWER
✍input your city name .
If any error then write :

City name,country name

  ANSWER
  keyboard: 
  aliases: 
CMD*/


var string=message;
var m = string.replace(/ /g, '%20');

var d = "🔝Main-menu";
if(m == d){
Bot.run({ command: "/mmenu321" })
}else{
HTTP.get( {
    url: "http://api.openweathermap.org/data/2.5/weather?APPID=b1352f803a09b39268464a28cdc959a6&units=metric&q=" + m,
    success: '/onLoading3211',
    error: '/onError3211'
    // headers: headers - if you need headers
  } )
};
