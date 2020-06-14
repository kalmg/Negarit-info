/*CMD
  command: /onLoading788
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Bin check 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var res = JSON.parse(content);

var msg = "✅valid : " + res.ip + "\n<s><u>_____________________________________</u></s>" + "\n\n<u>Ip-Info</u> :\n 🔸Type : " + res.type + "\n 🔸Continent : " + res.continent + " (" + res.continent_code + ")" + "\n 🔸ASN : " + res.asn + "\n 🔸ORG : " + res.org + "\n 🔸ISP : " + res.isp + "\n\n<u>Country-Info</u> :\n 🔸Name : " + res.country + " (" + res.country_code + ")\n 🔸Capital : " + res.country_capital + "\n 🔸Iso : " + res.country_phone + "\n 🔸Neighbours : " + res.country_neighbours + "\n 🔸State : " + res.region + "\n 🔸City : " + res.city + "\n\n<u>Timezone-Info</u> :\n 🔸Name : " + res.timezone_name + "\n 🔸Dst_Offset : " + res.timezone_dstOffset + "\n 🔸Gmt_Offset : " + res.timezone_gmtOffset + " sec" + "\n 🔸zone : " + res.timezone + "\n\n<u>Currency-Info</u> :\n 🔸Name : " + res.currency + "\n 🔸Code : " + res.currency_code + "\n 🔸Symbol : " + res.currency_symbol + "\n 🔸Rates : " + res.currency_rates + "\n\n<u>Location-Info</u> :\n 🔸Latitude : " + res.latitude + "\n 🔸Longitude : " + res.longitude + "\n\n<s><u>_____________________________________</u></s>";
if(res.success){
Api.sendPhoto( {
chat_id: chat.chatid,
photo: "http://www.geognos.com/api/en/countries/flag/"+res.country_code+".png",
caption: msg,
parse_mode: "HTML",
reply_to_message_id: request.message_id,
} );
}else{
Bot.sendMessage("❌ invalid ip address ❕")
};
/*Api.sendMessage( {
chat_id: chat.chatid,
text: msg,
parse_mode: "HTML",
reply_to_message_id: request.message_id
} );*/
