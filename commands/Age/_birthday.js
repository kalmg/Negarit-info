/*CMD
  command: /birthday
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Age

  <<ANSWER
Input your birthday
🔏In the format of :

MM/DD/YYYY

  ANSWER
  keyboard: 
  aliases: 📆age-calculator
CMD*/

function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}
function getMonth(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        month  = month + 11;
    }
    return month;
}
function catMonth(){
    var  today = new Date();
    var bm = today.getMonth();
     if(bm===0 || bm===1 || bm===3 || bm===5 || bm===7 || bm===8 || bm===10){
         return 31
     }else{
         return 30
 
    }
}
var w = catMonth();

function getDay(DOB){
    var today = new Date();
    var birthDate = new Date(DOB);
    var day = today.getDate() - birthDate.getDate();
    if (day < 0 ){
        day = (day + w);
    }
    return day};
function extMonth(DOB){
  var today = new Date();
  var birthDate = new Date(DOB);
  var day = today.getDate() - birthDate.getDate();
  var mp = 0;
  if(day>=0){
    mp = (mp +1);
}
return mp};
function anotherMonth(DOB){
   var today = new Date();
   var birthDate = new Date(DOB);
   var gold = today.getMonth() - birthDate.getMonth();
   var gf = 0;
      if((gold>=0) && (today.getDate() >= birthDate.getDate())){
  gf = (gf+1);
}
return gf};
var gf1 = anotherMonth(message);
var np = getMonth(message);
var mp1 = extMonth(message);
var totaMonthAge = (mp1 + np - gf1);

var myage = '❄️your age  :\n'+getAge(message)+' Years '+totaMonthAge+' Months '+getDay(message)+' days !';

Bot.sendMessage(myage);
//second stage
var today = new Date();
var birthDate = new Date(message);
var rMonth = (birthDate.getMonth() + 1);

var M = rMonth + ' ' + birthDate.getDate() + ' ' + today.getFullYear();
//second stage
var targetDate = new Date(M);
targetDate.setFullYear(targetDate.getFullYear() + 1);
//for 1st line
var yyyy = targetDate.getFullYear();
var dd = targetDate.getDate();
var mm = targetDate.getMonth() + 1; // 0 is January, so we must add 1
var day = targetDate.getDay();
var days = new Array();
days[0] = "Sunday      ";
days[1] = "Monday     ";
days[2] = "Tuesday    ";
days[3] = "Wednesday";
days[4] = "Thursday  ";
days[5] = "Friday       ";
days[6] = "Saturday   ";
days[7] = "Sunday      ";
days[8] = "Monday     ";
var d1 = days[day];
//for second line
var targetDate1 = new Date(M);
targetDate1.setFullYear(targetDate1.getFullYear() + 2);

var yyyy1 = targetDate1.getFullYear();
var day1 = targetDate1.getDay();
var d2 = days[day1];
//for third line
var targetDate2 = new Date(M);
targetDate2.setFullYear(targetDate2.getFullYear() + 3);

var yyyy2 = targetDate2.getFullYear();
var day2 = targetDate2.getDay();
var d3 = days[day2];
//forth line
var targetDate3 = new Date(M);
targetDate3.setFullYear(targetDate3.getFullYear() + 4);

var yyyy3 = targetDate3.getFullYear();
var day3 = targetDate3.getDay();
var d4 = days[day3];
//last line
var targetDate4 = new Date(M);
targetDate4.setFullYear(targetDate4.getFullYear() + 5);

var yyyy4 = targetDate4.getFullYear();
var day4 = targetDate4.getDay();
var d5 = days[day4];

//msg formating
var dateString = "☣upcoming birthdays : \n\n------------------------------------------------\n🔅" + d1 + " <= " + dd + "/" + mm + "/" + yyyy + "\n🔅" + d2 + " <= " + dd + "/" + mm + "/" + yyyy1 + "\n🔅" + d3 + " <= " + dd + "/" + mm + "/" + yyyy2 + "\n🔅" + d4 + " <= " + dd + "/" + mm + "/" + yyyy3 + "\n🔅" + d5 + " <= " + dd + "/" + mm + "/" + yyyy4 + "\n------------------------------------------------";

// So you can see the output
Bot.sendMessage(dateString);
//final stage or last msg
var yearF = getAge(message);
var monthF = getMonth(message);
var dayF = getDay(message);
var monthsFM = ((yearF * 12) + monthF);
var dayFM = ((monthsFM * 30.4375) + dayF+1);
var hoursNow= today.getHours();
var hourFM = ((dayFM * 24)+ hoursNow-4);
var minuteNow = today.getMinutes();
var minuteFM = ((hourFM * 60) + minuteNow);
var secNow = today.getSeconds();
var secFM = ((minuteFM * 60)+ secNow);
var millNow = today.getMilliseconds();
var millisecFM = ((secFM * 1000)+millNow);
//msg formatting
var totalMsg = "🧶Total age in the particular format : \n\n" + "*------------------------------------------------*" + "\n1├ " + yearF + "  years" + "\n2├ " + monthsFM + "  months" + "\n3├ " + dayFM + "  days" + "\n4├ " + hourFM + "  hours" + "\n5├ " + minuteFM + "  minutes" + "\n6├ " + secFM + "  seconds" + "\n7├ " + millisecFM + "  milliseconds\n" + "*------------------------------------------------*";
//final output
Bot.sendMessage(totalMsg);
