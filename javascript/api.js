var events;
var tmqueryUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=' + dateInput +
  '&city=' + locationInput + 'apikey=RIQwqKGOlNCjdsTch4qC32WaCBv94S9d';
$.ajax({
  url: tmqueryUrl,
  method: 'GET',
}).then(function (response) {
  console.log(tmqueryUrl);
  console.log(response);
});

function movieDisplay(){
var graceQuery = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=' + dateInput + '&api_key=hm7sgu5m4ff6d54afvm688mz';
$.ajax({
  url: graceQuery,
  method: 'GET',
}).then(function(response){
  console.log(graceQuery);
  console.log(response);
  cardCreate();
});
}
