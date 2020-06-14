/*CMD
  command: /siteyes
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Movie
  answer: Please! ✍Input a movie name
  keyboard: 
  aliases: 🎬movie-details
CMD*/

Bot.sendMessage("_looking for movie_ - " + message);


var string=message;
var a = string.replace(/ /g, '%20');

  HTTP.get( {
    url: "http://www.omdbapi.com/?apikey=6031eba1&t="+a,
    success: 
    '/onLoading321',
 
    error: '/onError321'
    // headers: headers - if you need headers
  } )


/* also you can send POST request
  HTTP.post( {
    url: "http://example.com",
    success: '/onLoading ',
    body: {},  // body params
    // cookies: "" // cookies   
    // headers: headers - if you need headers
  } )
*/
