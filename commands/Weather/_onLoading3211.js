/*CMD
  command: /onLoading3211
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Weather
  answer: 
  keyboard: 
  aliases: 
CMD*/

var res = JSON.parse(content);

if(res.cod==404){
 Bot.sendMessage("☹️sorry! your city not found !\n✍input 'your city,country name'" )
   return //exit
};
var icn = res.weather[0].icon;

var icon = []; //empty array
icon["01d"] = "🌞";
icon["01n"] = "⭐";
icon["02d"] = "🌤";
icon["02n"] = "🌌";
icon["03n"] = "🌥";
icon["03d"] = "🌥";
icon["04d"] = "☁";
icon["04n"] = "☁";
icon["09d"] = "🌧";
icon["09n"] = "🌧";
icon["10d"] = "🌦";
icon["10n"] = "🌧";
icon["11d"] = "🌩";
icon["11n"] = "⛈";
icon["13d"] = "⛄";
icon["13n"] = "⛄";
icon["50d"] = "🏞";
icon["50n"] = "🎑";
//icon sending

Bot.sendMessage(icon[icn]);

var exs = res.timezone;
var d = new Date();
d.setSeconds(d.getSeconds() + exs);
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
function hourS(hr){
if(hr>=13){
   hr = (hr-12)
}else{
   hr = hr
}
return hr};
var hrs = hourS(h)

function ampm(hor){
if(hor>=12){
  hor = "PM"
}else{
  hor = "AM"
}
return hor};
var tco = ampm(h);

var cuTime = hrs + ":" + m + ":" + s + " " + tco;

var msg = "*Country :* _" + res.sys.country + "_\n*Local Area :* _" + res.name + "_\n*City Time :* _" + cuTime + "_\n---------------------------------------------\n\n" + "🌡*Temp :*  " + res.main.temp + "℃ 【" + res.main.temp_min + "〰" + res.main.temp_max + "】\n" + "🌐*Weather :*  " + res.weather[0].description + "\n🌫*Clouds :*  " + res.clouds.all + " %\n💨*Wind speed :*  " + res.wind.speed + " m/s\n"  ;



Bot.sendMessage(msg);
