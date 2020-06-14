/*CMD
  command: /convert321
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Currency
  answer: ✍input amount to convert
  keyboard: 
  aliases: 
CMD*/

let from_cur = Bot.getProperty("from-currency");
let to_cur = Bot.getProperty("to-currency");

if(!from_cur||!to_cur){
  Bot.sendMessage("You need set conversation option:\n /option321");
}else{
  Bot.sendMessage("Convert *" + message + " " + from_cur + "* to " + to_cur );
  let query = from_cur + "_" + to_cur;
  Libs.CurrencyConverter.convert(query, message, "/onconvert321" );
}

Bot.sendKeyboard("🔝Main-menu","😊Done!");
