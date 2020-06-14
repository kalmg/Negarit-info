/*CMD
  command: /zipco321
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Look up
  answer: ✍Write a zipcode
  keyboard: 🔙 Back
  aliases: 
CMD*/

var zipcu = options.cu;
var zip = message;
if(zip=="🔙Back"){
Bot.runCommand("🥈Silver-Gateway")
 return
};

HTTP.get( {
    url: "http://api.zippopotam.us/" + zipcu + "/" + zip,
    success: '/onLoading780',
    error: '/onError'
    // headers: headers - if you need headers
  } )
