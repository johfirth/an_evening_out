
var locationInput = '';
var dateInput;
var dateFormattedStart;
var dateFormattedEnd;
var eventTypes = ['sports','concerts','theater']


function cardCreate(response){
    var newResultCard = $('<div class = "card col-md-6">');
    var cardTitle = $('<h4 class="card-title text-center">');
    var cardInfo =$('<p class = "text-center">');
    var cardImage = $('<img>');
    var cardButton = $('<a class = "btn btn-default">');
    var eventName = response._embedded.events[0].name;
    var eventImages = response._embedded.events[0].images;
    var buttonLink = response._embedded.events[0].url;
    var eventImageSized;
    var eventDate = response._embedded.events[0].dates.start.localDate;
    var formattedEventDate = (moment(eventDate).format('dddd, MMMM Do'))
    // correctImageSize(eventImages);
    cardTitle.text(eventName);
    newResultCard.append(cardTitle);
    cardInfo.text(formattedEventDate);
    newResultCard.append(cardInfo)
    cardImage.attr('src', eventImageSized);
    newResultCard.append(cardImage);
    cardButton.text('Buy Now')
    cardButton.attr('href', buttonLink);
    newResultCard.append(cardButton);
    $('#result-field').append(newResultCard);
    console.log(response)
    
}

function eventDisplay (){
    for (var i = 0; i < eventTypes.length; i++) {
        var event = eventTypes[i];
        var tmQueryURL = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=' + dateFormattedStart + '&endDateTime' + dateFormattedEnd +
            '&city=' + locationInput + '&keyword=' + event + '&apikey=RIQwqKGOlNCjdsTch4qC32WaCBv94S9d';
$.ajax({
    url: tmQueryURL,
    method: 'GET',
    }).then(function (response) {cardCreate(response)})
    }};

$('#search-button').on("click", function(){
    $('#result-field').empty();
    locationInput = $('#location-input').val().trim();
    dateInput = $('#date-input').val();
    $('#location-input').val('');
    $('date-input').val('');
    dateFormattedStart = (moment(dateInput).format('YYYY-MM-DD'))+'T00:00:01Z';
    dateFormattedEnd = (moment(dateInput).format('YYYY-MM-DD'))+'T11:59:00Z';
    eventDisplay();



})

function correctImageSize(eventImages){
    for (var key in eventImages){
        
    }}


