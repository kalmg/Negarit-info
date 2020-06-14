/*CMD
  command: 📛Admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_chat = Bot.getProperty("admin_chat");
if(chat.chatid!=admin_chat){
 Bot.sendMessage("You can not access this option!🔒");
 return
};//exit


Bot.sendKeyboard("📊stats,🖇Apis,\n⚙settings,♻others,\n🔝Main-menu", "Welcome sir!😊")
