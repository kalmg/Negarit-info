/*CMD
  command: /onresult1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Start&others
  answer: 
  keyboard: 
  aliases: 
CMD*/

let user = options.result.status

if (user == "member" || user == "creator" || user == "administrator" ) {
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "✅ Now You Can Use This Bot !"
})
  Bot.runCommand("/home")
} else {
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "⚠️ PLease First Join Channel Then Try Again"
})
  Bot.runCommand("/start")
}

Bot.setProperty("status", user, "text")
