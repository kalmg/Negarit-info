/*CMD
  command: /adminReply321
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Rate
  answer: Sir! Reply to user.
  keyboard: 
  aliases: 
CMD*/

tgid = options.tgid;

msg = "ከአስተዳዳሪው የተላከ መልስ: \n_____________________________" + "\n" + message ;
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("መልዕክቱ ተልኳል")
