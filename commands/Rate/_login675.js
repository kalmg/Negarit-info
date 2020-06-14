/*CMD
  command: /login675
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Rate
  answer: Input password
  keyboard: 
  aliases: 
CMD*/

msg = "Access denied."

if(message=="999593"){
  Bot.setProperty("admin_chat", chat.chatid, "string")
  msg = "You admin now. Please wait messages from users";
}

Bot.sendMessage(msg);
