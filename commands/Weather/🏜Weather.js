/*CMD
  command: 🏜Weather
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Weather
  answer: 
  keyboard: 
  aliases: 
CMD*/

let text = "🤘This weather service is better\nthan your mobile weather apk .\nBcoz it is auto-updated after 30Minutes!" 

var inline_keyboard =[
[{
        text: "🏖Current-Weather", 
     
    }],
[{
        text: "🌆City-To-Weather", 
     
    }],
[{
        text: "🛩Change-Location", 
        request_location: true
    }],
[{
        text: "🔝Main-menu", 
     
    }]
]


Api.sendMessage({
    text: text,
    parse_mode: "html",
    reply_markup: {
        keyboard: inline_keyboard,
        resize_keyboard: true
      // for big buttons
    }
});
