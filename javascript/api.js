var movies;
var yelpqueryUrl = 'https://api.yelp.com/v3/businesses/search?' + movies + "&api_key=732xb6PcRAiiGY8yQwpqznOPz8u4xy4AGNwsrpEyXCqptQ4ZR5s8wrx8Y4kvC0x3tSwFD3AnDXn-Lo_SJXPsVU29hhh5GT3R5K_F8ZAim13ehQF3Ec0hCEeRw9G6WnYx';
$.ajax({
    url: yelpqueryUrl,
    method: 'GET',
}).then(function (response) {
    console.log(yelpqueryUrl);
    console.log(response);
});

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

var fanqueryUrl = 'http://api.fandango.com/v1/?op=performancesbymoviepostalcodesearch&movieid=151500&postalcode=94105&apikey=mcgcv6cxjnhgy8wajybxbup2+&sig=cccc2a0ac7dbf04b413cdbfd65f4f4e335833405fee3333ad03a4e0c8a0c36de'

$.ajax({
    url: fanqueryUrl,
    method: 'GET',
}).then(function (response) {
    console.log(fanqueryUrl);
    console.log(response);
});


https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=2018-03-29T00:00:01Z&endDateTime=2018-03-29T11:59:00Z$city=washington&apikey=RIQwqKGOlNCjdsTch4qC32WaCBv94S9d