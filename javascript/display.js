var locationInput = '';
var dateInput;
var dateFormattedStart;
var dateFormattedEnd;
var eventTypes = ['sports', 'concerts', 'theater']

function cardCreate(response) {
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

function eventDisplay() {
    for (var i = 0; i < eventTypes.length; i++) {
        var event = eventTypes[i];
        var tmQueryURL = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=' + dateFormattedStart + '&endDateTime' + dateFormattedEnd +
            '&city=' + locationInput + '&keyword=' + event + '&apikey=RIQwqKGOlNCjdsTch4qC32WaCBv94S9d';
        $.ajax({
            url: tmQueryURL,
            method: 'GET',
        }).then(function (response) { cardCreate(response) })
    }
};

$('#search-button').on("click", function () {
    locationInput = $('#location-input').val().trim();
    dateInput = $('#date-input').val();
    $('#location-input').val('');
    $('date-input').val('');
    dateFormattedStart = (moment(dateInput).format('YYYY-MM-DD')) + 'T00:00:01Z';
    dateFormattedEnd = (moment(dateInput).format('YYYY-MM-DD')) + 'T11:59:00Z';
    eventDisplay();
})
//google maps//
function initMap() {
    var dc = { lat: 38.9072, lng: 77.0369 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: dc
    });
    var marker = new google.maps.Marker({
        position: dc,
        map: map
    });
};