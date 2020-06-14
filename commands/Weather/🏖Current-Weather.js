/*CMD
  command: 🏖Current-Weather
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Weather
  answer: 
  keyboard: 
  aliases: 
CMD*/

var logt = User.getProperty("logt");
var latt = User.getProperty("latt");
if(!logt){
  Bot.sendMessage("😊Please ! Set your location first.\nTo set your location \nclick > 【🛩Change-Location】")
  return // exit
}
HTTP.get( {
    url: "http://api.openweathermap.org/data/2.5/weather?APPID=b1352f803a09b39268464a28cdc959a6&units=metric&lat=" + latt + "&lon=" + logt,
    success: '/onLoading541',
    error: '/onError541'
    // headers: headers - if you need headers
  } )
