/*CMD
  command: /Rate424
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Rate
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("Sorry. Bot have not admin now");
  return // exit
}

user_link = Libs.commonLib.getLinkFor(user)

msg = "Rating from: " + user_link +
     "\n4🌟🌟🌟🌟" + 
     "\n/reply" + user.telegramid;


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/

Bot.sendMessage("እርሶ ለቦቱ የሰጡት ደረጃ 4🌟 ነው ❕\nእርሶ የሰጡት ደረጃ ቦቱን ለማዳበር አስተዳዳሪውን ይረዳዋል");
