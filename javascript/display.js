
var locationInput = '';
var dateInput;
var dateFormattedStart;
var dateFormattedEnd;


$('#search-button').on("click", function(){
    locationInput = $('#location-input').val().trim();
    dateInput = $('#date-input').val();
    $('#location-input').val('');
    $('date-input').val('');
    dateFormattedStart = (moment(dateInput).format('YYYY-MM-DD'))+'T00:00:01Z';
    dateFormattedEnd = (moment(dateInput).format('YYYY-MM-DD'))+'T11:59:00Z';
    eventDisplay();
})

function eventDisplay (){
    var tmqueryUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=' + dateFormattedStart + '&endDateTime' + dateFormattedEnd +
'&city=' + locationInput + '&apikey=RIQwqKGOlNCjdsTch4qC32WaCBv94S9d';

$.ajax({
    url: tmqueryUrl,
    method: 'GET',
}).then(function (response) {
    console.log(response);
});
}