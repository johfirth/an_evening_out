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

//google places//
var map;
var service;
var infowindow;

function initialize() {
    var location = new google.maps.LatLng(-33.8665433, 151.1956316);

    map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15
    });

    var request = {
        location: location,
        radius: '1',
        type: ['restaurant'],
        openNow: true,
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
};
function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
    }
  };

