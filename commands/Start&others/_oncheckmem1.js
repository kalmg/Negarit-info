/*CMD
  command: /oncheckmem1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Start&others
  answer: 
  keyboard: 
  aliases: keyboard
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}

let id = user.telegramid;
Api.getChatMember({
chat_id:"@Negarit_media1", user_id: id, on_result :"/onresult1"})
//Bot.sendMessage(inspect(options));
