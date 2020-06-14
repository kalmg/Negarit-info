/*CMD
  command: Clone870
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Bin check 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = message;
var d = "🔙Back";
if(m == d){
Bot.run({ command: "/mmenu321" })
}else{
var str = new String( m );
var lnth = str.length;
if(lnth<6){
Bot.sendMessage("😐😐  You input " + lnth + " Digit of your _BIN_.\nPlease input atleast 6 digit of the bin.");
Bot.runCommand('Clone870');
return
};
HTTP.get( {
    url: "https://lookup.binlist.net/"+message,
    success: '/onLoading870',
    error: '/onError'
    // headers: headers - if you need headers
  } )
};
