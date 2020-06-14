/*CMD
  command: we321
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Weather
  answer: 
  keyboard: 
  aliases: 
CMD*/

var logt = options.location.longitude;
var latt = options.location.latitude;
User.setProperty("logt", logt, "string");
User.setProperty("latt", latt, "string");

Bot.sendMessage("😊Your Location Updated Successfully !");
Bot.sendMessage("Now you can check your weather ! 👇👇");
