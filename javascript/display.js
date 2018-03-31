
var locationInput = '';
var dateInput;
var dateFormattedStart;
var dateFormattedEnd;


function cardCreate(response){
    var newResultCard = $('<div class = "card">');
    var cardTitle = $('<h4 class="card-title text-center">');
    var cardImage = $('<img>');
    var eventName = response._embedded.events[0].name;
    var eventImage = response._embedded.events[0].images[0].url;
    cardTitle.text(eventName);
    newResultCard.append(cardTitle);
    cardImage.attr('src', eventImage);
    newResultCard.append(cardImage);



    $('#result-field').append(newResultCard);
    
}

function sportsDisplay (){
    var tmQueryURL = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=' + dateFormattedStart + '&endDateTime' + dateFormattedEnd +
'&city=' + locationInput + '&keyword=sports&apikey=RIQwqKGOlNCjdsTch4qC32WaCBv94S9d';

$.ajax({
    url: tmQueryURL,
    method: 'GET',
    }).then(function (response) {cardCreate(response); console.log(response)})
        };

$('#search-button').on("click", function(){
    locationInput = $('#location-input').val().trim();
    dateInput = $('#date-input').val();
    $('#location-input').val('');
    $('date-input').val('');
    dateFormattedStart = (moment(dateInput).format('YYYY-MM-DD'))+'T00:00:01Z';
    dateFormattedEnd = (moment(dateInput).format('YYYY-MM-DD'))+'T11:59:00Z';
    sportsDisplay();
})
