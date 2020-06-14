/*CMD
  command: 🥈Silver-Gateway
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Look up
  answer: Please! Select a country👇
  keyboard: 🔙Back,🔝Main-menu,\n🇪🇹Ethiopia\n🇦🇩Andorra,🇦🇷Argentina,\n🇦🇸American Samoa,🇦🇹Austria,\n🇦🇺Australia,🇧🇩Bangladesh,\n🇧🇪Belgium,🇧🇬Bulgaria,\n🇧🇷Brazil,🇨🇦Canada,\n🇭🇷Croatia,🇨🇿Czech Republic,\n🇩🇪Germany,🇩🇰Denmark,\n🇩🇴Dominican Republic,🇫🇮Finland,\n🇫🇴Faroe Islands,🇫🇷France,\n🇬🇫French Guiana,🇬🇧Great Britain,\n🇬🇬Guernsey,🇬🇱Greenland,\n🇬🇵Guadeloupe,🇬🇹Guatemala,\n🇬🇺Guam,🇬🇾Guyana,\n🇭🇺Hungary,🇮🇲Isle of Man,\n🇮🇳India,🇮🇸Iceland,\n🇮🇹Italy,🇯🇪Jersey,\n🇯🇵Japan,🇱🇮Liechtenstein,\n🇱🇹Lithuania,🇱🇺Luxembourg,\n🇾🇹Mayotte,🇲🇨Monaco,\n🇲🇩Moldova,🇲🇭Marshall Islands,\n🇲🇰Macedonia,🇲🇶Martinique,\n🇲🇵Northern Mariana Islands,\n🇲🇽Mexico,🇲🇾Malaysia,\n🇳🇱Holland,🇳🇴Norway,\n🇳🇿New Zealand,🇵🇭Philippines,\n🇵🇰Pakistan,🇵🇱Poland,\n🇵🇷Puerto Rico,🇵🇹Portugal,\n🇷🇪French Reunion,🇷🇺Russia,\n🇸🇪Sweden,🇸🇮Slovenia,\n🇮🇸Svalbard & Jan Mayen islands,\n🇸🇰Slovak Republic,🇸🇲San Marino,\n🇪🇸Spain,🇱🇰Sri Lanka,\n🇨🇭Switzerland,🇿🇦South Africa,\n🇹🇭Thailand,🇹🇷Turkey,\n🇺🇸United States,🇻🇦Vatican city,\n🇻🇮U.S. Virgin Islands 
  aliases: /zip321
CMD*/

var st =
 [ "🇪🇹Ethiopia","🇦🇩Andorra","🇦🇷Argentina","🇦🇸American Samoa","🇦🇹Austria","🇦🇺Australia","🇧🇩Bangladesh","🇧🇪Belgium","🇧🇬Bulgaria","🇧🇷Brazil","🇨🇦Canada","🇭🇷Croatia","🇨🇿Czech Republic","🇩🇪Germany","🇩🇰Denmark","🇩🇴Dominican Republic","🇫🇮Finland","🇫🇴Faroe Islands","🇫🇷France","🇬🇫French Guiana","🇬🇧Great Britain","🇬🇬Guernsey","🇬🇱Greenland","🇬🇵Guadeloupe","🇬🇹Guatemala","🇬🇺Guam","🇬🇾Guyana","🇭🇺Hungary","🇮🇲Isle of Man","🇮🇳India","🇮🇸Iceland","🇮🇹Italy","🇯🇪Jersey","🇯🇵Japan","🇱🇮Liechtenstein","🇱🇹Lithuania","🇱🇺Luxembourg","🇾🇹Mayotte","🇲🇨Monaco","🇲🇩Moldova","🇲🇭Marshall Islands","🇲🇰Macedonia","🇲🇶Martinique","🇲🇵Northern Mariana Islands","🇲🇽Mexico","🇲🇾Malaysia","🇳🇱Holland","🇳🇴Norway","🇳🇿New Zealand","🇵🇭Philippines","🇵🇰Pakistan","🇵🇱Poland","🇵🇷Puerto Rico","🇵🇹Portugal","🇷🇪French Reunion","🇷🇺Russia","🇸🇪Sweden","🇸🇮Slovenia","🇮🇸Svalbard & Jan Mayen islands","🇸🇰Slovak Republic","🇸🇲San Marino","🇪🇸Spain","🇱🇰Sri Lanka","🇨🇭Switzerland","🇿🇦South Africa","🇹🇭Thailand","🇹🇷Turkey","🇺🇸United States","🇻🇦Vatican city","🇻🇮U.S. Virgin Islands" ];

var m = message;
if(m == "🔝Main-menu"){
Bot.runCommand("🔝Main-menu")
return};

if(m == "🔙Back"){
Bot.runCommand("📬zipcode")
return};

var n = st.includes(m);
if(!n){
    Bot.sendMessage("🖲Input a Button from the options below")
    Bot.runCommand("/zip321");
return //exit
};

var cun = [];
cun["🇪🇹Ethiopia"] = "ET";
cun["🇦🇩Andorra"] = "AD";
cun["🇦🇷Argentina"] = "AR";
cun["🇦🇸American Samoa"] = "AS";
cun["🇦🇹Austria"] = "AT";
cun["🇦🇺Australia"] = "AU";
cun["🇧🇩Bangladesh"] = "BD";
cun["🇧🇪Belgium"] = "BE";
cun["🇧🇬Bulgaria"] = "BG";
cun["🇧🇷Brazil"] = "BR";
cun["🇨🇦Canada"] = "CA";
cun["🇨🇭Switzerland"] = "CH";
cun["🇨🇿Czech Republic"] = "CZ";
cun["🇩🇪Germany"] = "DE";
cun["🇩🇰Denmark"] = "DK";
cun["🇩🇴Dominican Republic"] = "DO";
cun["🇪🇸Spain"] = "ES";
cun["🇫🇮Finland"] = "FI";
cun["🇫🇴Faroe Islands"] = "FO";
cun["🇫🇷France"] = "FR";
cun["🇬🇧Great Britain"] = "GB";
cun["🇬🇫French Guiana"] = "GF";
cun["🇬🇬Guernsey"] = "GG";
cun["🇬🇱Greenland"] = "GL";
cun["🇬🇵Guadeloupe"] = "GP";
cun["🇬🇹Guatemala"] = "GT";
cun["🇬🇺Guam"] = "GU";
cun["🇬🇾Guyana"] = "GY";
cun["🇭🇷Croatia"] = "HR";
cun["🇭🇺Hungary"] = "HU";
cun["🇮🇲Isle of Man"] = "IM";
cun["🇮🇳India"] = "IN";
cun["🇮🇸Iceland"] = "IS";
cun["🇮🇹Italy"] = "IT";
cun["🇯🇪Jersey"] = "JE";
cun["🇯🇵Japan"] = "JP";
cun["🇱🇮Liechtenstein"] = "LI";
cun["🇱🇰Sri Lanka"] = "LK";
cun["🇱🇹Lithuania"] = "LT";
cun["🇱🇺Luxembourg"] = "LU";
cun["🇲🇨Monaco"] = "MC";
cun["🇲🇩Moldova"] = "MD";
cun["🇲🇭Marshall Islands"] = "MH";
cun["🇲🇰Macedonia"] = "MK";
cun["🇲🇵Northern Mariana Islands"] = "MP";
cun["🇲🇶Martinique"] = "MQ";
cun["🇲🇽Mexico"] = "MX";
cun["🇲🇾Malaysia"] = "MY";
cun["🇾🇹Mayotte"] = "YT";
cun["🇳🇱Holland"] = "NL";
cun["🇳🇴Norway"] = "NO";
cun["🇳🇿New Zealand"] = "NZ";
cun["🇵🇭Philippines"] = "PH";
cun["🇵🇰Pakistan"] = "PK";
cun["🇵🇱Poland"] = "PL";
cun["🇵🇷Puerto Rico"] = "PR";
cun["🇵🇹Portugal"] = "PT";
cun["🇷🇪French Reunion"] = "RE";
cun["🇷🇺Russia"] = "RU";
cun["🇸🇪Sweden"] = "SE";
cun["🇸🇮Slovenia"] = "SI";
cun["🇮🇸Svalbard & Jan Mayen islands"] = "SJ";
cun["🇸🇰Slovak Republic"] = "SK";
cun["🇸🇲San Marino"] = "SM";
cun["🇿🇦South Africa"] = "ZA";
cun["🇹🇭Thailand"] = "TH";
cun["🇹🇷Turkey"] = "TR";
cun["🇺🇸United States"] = "US";
cun["🇻🇦Vatican city"] = "VA";
cun["🇻🇮U.S. Virgin Islands"] = "VI";

var cu = cun[m];
Bot.run({
  command: "/zipco321",
  options: { cu: cu }  // pass tgid in options to that command
});
