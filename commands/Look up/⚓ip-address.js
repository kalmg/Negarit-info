/*CMD
  command: ⚓ip-address
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Look up
  answer: ✍Write An IP Address.
  keyboard: 
  aliases: 
CMD*/

var ip = message;
if(ip=="🔙Back"){
Bot.runCommand("🥈Silver-Gateway")
 return
};

HTTP.get( {
    url: "http://free.ipwhois.io/json/" + ip,
    success: '/onLoading788',
    error: '/onError'
    // headers: headers - if you need headers
  } )
