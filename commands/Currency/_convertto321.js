/*CMD
  command: /convertto321
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Currency
  answer: Please select one
  keyboard: ETB,\nUSD, EUR, CNY, JPY, RUB, \nGPB,INR, AUD, NZD, THB, \nBTC, ETH, LTC,HKD,CAD,\nSEK,BDT,CNH,PKR,MXN\n🔝Main-menu
  aliases: 
CMD*/

// save currency label for conversation
Bot.setProperty("to-currency", message, "string");
Bot.runCommand("/convert321");// save currency label for conversation

var m = message;
if(m == "🔝Main-menu"){
Bot.runCommand("🔝Main-menu")
return};
