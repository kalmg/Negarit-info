/*CMD
  command: /option321
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Currency
  answer: 🕹 Please input convertation currency

  keyboard: ETB,\nUSD, EUR, CNY, JPY, RUB, \nGPB,INR, AUD, NZD, THB, \nBTC, ETH, LTC,HKD,CAD,\nSEK,BDT,CNH,PKR,MXN\n🔝Main-menu
  aliases: ♋currency-converter
CMD*/

// save currency label for conversation
Bot.setProperty("from-currency", message, "string");
Bot.sendMessage("The " + message + " will be converted to..." );
Bot.runCommand("/convertto321");

var m = message;
if(m == "🔝Main-menu"){
Bot.runCommand("🔝Main-menu")
return};
