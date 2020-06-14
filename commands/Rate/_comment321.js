/*CMD
  command: /comment321
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Rate
  answer: ለአስተዳዳሪ ማንኛውንም ነገር ይፃፉ! 😊
  keyboard: 
  aliases: 
CMD*/

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("ይቅርታ. ይህ ቦት ለጊዜው አስተዳዳሪ የለውም");
  return // exit
}

user_link = Libs.commonLib.getLinkFor(user)

msg = "Message from: " + user_link +
     "\n" + message +
     "\n/reply" + user.telegramid;

var d = "🔝ዋና-ገጽ";
var m = message;
if(m == d){
Bot.run({ command: "/mmenu321" })
}else{
Bot.sendMessageToChatWithId(
  admin_chat, msg
);


/*Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});*/


Bot.sendMessage("አመሰግናለሁ !መልእክትዎ ለቦቱ ለአስተዳዳሪው ተልኳል.");
}
