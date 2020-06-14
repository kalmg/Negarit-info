/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start&others
  answer: You Are Main menu❕

  keyboard: 🧬Bin-Checker,👁‍🗨Look-Up,\n♋currency-converter,\n⚱Other-Stuff,✨ደረጃ ለመስጠት
  aliases: 
CMD*/



let text = "Hello! \n" +
    '<a href="' + 'tg://user?id=' + 
       user.telegramid + '">' + user.first_name +
    '</a> ' +
    "\nWelcome To This Bot " +
    '\nThis Bot Builded by <a href="' + 'tg://user?id=366829379">' +
    'Kaleab</a>' 

Api.sendMessage({
    text: text,
    parse_mode: "html",
});

var buttons = [
[ {title: "✅ Joined", command: "/oncheckmem1" } ]
]
Bot.sendInlineKeyboard(buttons, "🤖*PLease Join Channel First:*\n @negarit_media1");



