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

var fanqueryUrl = 'http://www.fandango.com/redirect.aspx?searchby=location&location=' + locationInput + '&date=' + dateInput + 'a=mcgcv6cxjnhgy8wajybxbup2';
$.ajax({
    url: fanqueryUrl,
    method: 'GET',
}).then(function (response) {
    console.log(fanqueryUrl);
    console.log(response);
});

//google places//


