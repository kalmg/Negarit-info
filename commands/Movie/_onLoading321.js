/*CMD
  command: /onLoading321
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Movie
  answer: 
  keyboard: 
  aliases: 
CMD*/

var res = JSON.parse(content);
if(!res.Error){
       Api.sendPhoto({
  photo: res.Poster, // it is picture!
  caption: 'Result : \n' + '\nTitle -         ' + res.Title + '\nRated -       ' + res.imdbRating + '\nReleased - ' + res.Released + '\nDuration -  ' + res.Runtime + '\nType -         ' + res.Genre + '\nDirector -   ' + res.Director + '\nActors -      ' + res.Actors + '\nBoxoffice - ' + res.BoxOffice,

 reply_markup: { inline_keyboard: [
    //line1
      [// run command /onButton2 on button pressing
      { text: "🔍other movie", callback_data: "/siteyes" }
    ]
    ]}
    
});
}else{
Bot.sendMessage("😓Your movie not found!\n*may reason* :\n🔸Spelling miss.\n🔸Imdb did't rate your movie.")
};
