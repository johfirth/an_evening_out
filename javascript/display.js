
var locationInput = '';
var dateInput;


$('#search-button').on("click", function(){
    locationInput = $('#location-input').val().trim();
    dateInput = $('#date-input').val();
    console.log(locationInput);
    console.log(dateInput)
})
