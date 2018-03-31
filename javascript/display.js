
var locationInput = '';
var dateInput;
var dateFormattedStart;
var dateFormattedEnd;

function cardCreate(response){
    var newResultCard = $('<div class = "card col-md-6">');
    var cardTitle = $('<h4 class="card-title text-center">');
    var cardImage = $('<img>');
    var cardButton = $('<a class = "btn btn-default">')
    var eventName = response._embedded.events[0].name;
    var eventImage = response._embedded.events[0].images[0].url;
    var buttonLink = response._embedded.events[0].url;
    cardTitle.text(eventName);
    newResultCard.append(cardTitle);
    cardImage.attr('src', eventImage);
    newResultCard.append(cardImage);
    cardButton.text('Buy Now')
    cardButton.attr('href', buttonLink);
    newResultCard.append(cardButton);


    $('#result-field').append(newResultCard);
    
}

function sportDisplay (){
    var tmQueryURL = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=' + dateFormattedStart + '&endDateTime' + dateFormattedEnd +
'&city=' + locationInput + '&keyword=sports&apikey=RIQwqKGOlNCjdsTch4qC32WaCBv94S9d';

$.ajax({
    url: tmQueryURL,
    method: 'GET',
    }).then(function (response) {cardCreate(response)})
    };

function concertDisplay (){
    var tmQueryURL = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=' + dateFormattedStart + '&endDateTime' + dateFormattedEnd +
'&city=' + locationInput + '&keyword=concert&apikey=RIQwqKGOlNCjdsTch4qC32WaCBv94S9d';

$.ajax({
    url: tmQueryURL,
    method: 'GET',
    }).then(function (response) {cardCreate(response)})
    };

function theaterDisplay (){
    var tmQueryURL = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=' + dateFormattedStart + '&endDateTime' + dateFormattedEnd +
'&city=' + locationInput + '&keyword=theater&apikey=RIQwqKGOlNCjdsTch4qC32WaCBv94S9d';

$.ajax({
    url: tmQueryURL,
    method: 'GET',
    }).then(function (response) {cardCreate(response)})
    };

$('#search-button').on("click", function(){
    locationInput = $('#location-input').val().trim();
    dateInput = $('#date-input').val();
    $('#location-input').val('');
    $('date-input').val('');
    dateFormattedStart = (moment(dateInput).format('YYYY-MM-DD'))+'T00:00:01Z';
    dateFormattedEnd = (moment(dateInput).format('YYYY-MM-DD'))+'T11:59:00Z';
    sportDisplay();
    concertDisplay();
    theaterDisplay();

})
