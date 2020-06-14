/*CMD
  command: /onLoading780
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Look up
  answer: 
  keyboard: 
  aliases: 
CMD*/

var conten = content;
var res0 = conten.replace(/"/g, '');
var res1 = res0.replace(/{/g, '');
var res2 = res1.replace(/}/g, '');
var res3 = res2.replace(/, country:/g, '\ncountry:');
var res4 = res3.replace(/, places:/g, '\n\nPlaces :');
var res5 = res4.replace(/place name: /g, '\n――――――――――――――――――\nplace name : ');
var res6 = res5.replace(/, longitude: /g, '\n🔹longitude: ');
var res7 = res6.replace(/, state: /g, '\n🔹state: ');
var res8 = res7.replace(/, latitude: /g, '\n🔹latitude: ');
var res9 = res8.replace(/post code:/g, '✅valid');
var  res10 = res9.replace(/[\[\]']+/g,'');
var res11 = res10.replace(/place/g, '🔹place');
var res12 = res11.replace(/, state abbreviation: /g, '\n🔹state abbreviation: ');
var res13 = res12.replace(/, country abbreviation/g, '\ncountry abbreviation');
var res14 = res13.replace(/,/g, '');
/*var res0 = conten.replace(/ /g, '');
var res1 = res0.replace(/"places":{/g, '"places": [{');
var res2 = res1 + ']}';
var ress = res2.replace(/}]}/g, ']}');

var res = JSON.parse(ress);*/
if(conten=='{}'){
Bot.sendMessage("😕Zipcode didnot match with country!")
Bot.sendKeyboard("🔙Back-To-Gates,\n🔝Main-menu", "📁If all correct ! 👉🏼 use 🥇Gold-Gateway")
 return //exit
}

Bot.sendMessage(res14 + '`');
Bot.sendKeyboard("🔙Back-To-Gates,\n🔝Main-menu", "😊Done")
