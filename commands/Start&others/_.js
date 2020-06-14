/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Start&others
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.location){
    Bot.run({
        command: "We321",
        options: {
            location: request.location
        }
    })
};

if(!message){
  // sometimes message can be blank
  return // exit from command
};
convtCurrncy = message.indexOf("/onconvert321") + 1
if(convtCurrncy){ return }


var admin_chat = Bot.getProperty("admin_chat");

if(chat.chatid!=admin_chat){
 Bot.sendMessage("💁Please input command !\n'" + message + "' is not a command");
};

isAdminReply = message.indexOf("/reply") + 1
if(!isAdminReply){ return }

// only admin here!
if(chat.chatid!=admin_chat){
 Bot.sendMessage("You are not admin!");
 return
}

tgid = message.split("/reply")[1]
if(!tgid){ return }

// run other command
Bot.run({
  command: "/adminReply321",
  options: { tgid: tgid }  // pass tgid in options to that command
});
