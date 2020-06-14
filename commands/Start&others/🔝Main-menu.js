/*CMD
  command: 🔝Main-menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Start&others
  answer: 
  keyboard: 
  aliases: /mmenu321
CMD*/

var admin_chat = Bot.getProperty("admin_chat");
if(chat.chatid!=admin_chat){
 Bot.sendKeyboard("🧬Bin-Checker,👁‍🗨Look-Up,\n♋currency-converter,\n⚱Other-Stuff,✨Rate", "🔝Main-menu")
}else{
Bot.sendKeyboard("🧬Bin-Checker,👁‍🗨Look-Up,\n♋currency-converter,\n⚱Other-Stuff,📛Admin", "🔝Main-menu")
};
