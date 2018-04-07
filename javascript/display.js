var locationInput = '';
var dateInput;
var dateFormattedStart;
var dateFormattedEnd;
var eventTypes = ['sports', 'concerts', 'theater', 'family']
var emailInput;
var passwordInput;
$(document).ready(function () {
    $('#new-user-modal').hide();
    $('#return-user-modal').hide();
    $('#search-container').hide();

    function cardCreate(response) {
        var newResultCard = $('<div class = "card">');
        var cardTitle = $('<div class="card-header text-center">');
        var cardInfo = $('<p class = "text-center">');
        var cardImage = $('<img>');
        var cardButton = $('<a class = "btn btn-default">');
        var verticalSpace = $('<br>')
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
        $('#result-field').append(verticalSpace);
        console.log(response + "place")

    }

    function eventDisplay() {
        for (var i = 0; i < eventTypes.length; i++) {
            var event = eventTypes[i];
            var tmQueryURL = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=' + dateFormattedStart + '&endDateTime' + dateFormattedEnd +
                '&city=' + locationInput + '&keyword=' + event + '&sort=date,asc&apikey=RIQwqKGOlNCjdsTch4qC32WaCBv94S9d';
            $.ajax({
                url: tmQueryURL,
                method: 'GET',
            }).then(function (response) { foodSearch(response) })
        }
    };
    function movieDisplay() {
        var graceQuery = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=' + dateInput + '&api_key=hm7sgu5m4ff6d54afvm688mz';
        $.ajax({
            url: graceQuery,
            method: 'GET',
        }).then(function (response) {
            console.log(graceQuery);
            console.log(response);
        });
    };

    $('#search-button').on("click", function () {
        $('#result-field').empty();
        $('#food-field').empty();
        locationInput = $('#location-input').val().trim();
        dateInput = $('#date-input').val();
        $('#location-input').val('');
        $('date-input').val('');
        dateFormattedStart = (moment(dateInput).format('YYYY-MM-DD')) + 'T00:00:01Z';
        dateFormattedEnd = (moment(dateInput).format('YYYY-MM-DD')) + 'T11:59:00Z';
        eventDisplay();
    });

    var OpenForBusiness;
    function youOpen(isOpen) {
        if (isOpen === true) {
            OpenForBusiness = "Open"
        } else {
            OpenForBusiness = "Closed"
        }
    };


    function foodSearch(response) {
        cardCreate(response);
        var lat = response._embedded.events[0]._embedded.venues[0].location.latitude
        var lng = response._embedded.events[0]._embedded.venues[0].location.longitude
        var placesURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='
            + lat + ',' + lng + '&radius=300&type=restaurant&key=AIzaSyB_CLJMgjvx29O0bsd-6Ao_k3zgs9tMz98'
        $.ajax({
            url: placesURL,
            method: 'GET',
        }).then(function (foodResponse) {
            var newResultCard = $('<div class = "card">');
            var cardTitle = $('<div class="card-header text-center">');
            var cardInfo1 = $('<p class = "text-center">');
            var cardInfo2 = $('<p class = "text-center">');
            var verticalSpace = $('<br>')
            var isOpen = foodResponse.results[0].opening_hours.open_now
            var rating = foodResponse.results[0].rating
            youOpen(isOpen)
            placesToEat = foodResponse.results[0].name;
            console.log(foodResponse);
            cardTitle.text(placesToEat);
            newResultCard.append(cardTitle)
            cardInfo1.text("Currently: " + OpenForBusiness);
            cardInfo2.text("Rating: " + rating)
            newResultCard.append(cardInfo1);
            newResultCard.append(cardInfo2)
            $('#food-field').append(newResultCard);
            $('#food-field').append(verticalSpace);

        });
    };

    $('#newsign-in').on('click', function () {
        $('#new-user-modal').show();
        $('#newsign-in').hide();
        $('#returnUser').hide();
    });
    $('#returnUser').on('click', function () {
        $('#return-user-modal').show();
        $('#newsign-in').hide();
        $('#returnUser').hide();
    });

    $('.close').on('click', function () {
        $('#new-user-modal').hide();
        $('#return-user-modal').hide();
        $('#newsign-in').show();
        $('#returnUser').show();

    });

    var config = {
        apiKey: "AIzaSyDCVf4BToH0S_xwSGgkaxSQUs2wKeuWVoI",
        authDomain: "project-1-ats.firebaseapp.com",
        databaseURL: "https://project-1-ats.firebaseio.com",
        projectId: "project-1-ats",
        storageBucket: "project-1-ats.appspot.com",
        messagingSenderId: "1066374942062"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    var email = '';
    var password = '';
    var oldEmail = '';
    var oldPassword = '';

    function newUser() {
        email = $('#newemailInput').val();
        password = $('#newpasswordInput').val();
    };
    function oldUser() {
        oldEmail = $('#oldEmail').val();
        oldPassword = $('#oldPassword').val();
        console.log(email);
        console.log(password);
    };
    function newUserData() {
        newUser();
        database.ref().push({
            email: email,
            password: password,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        database.ref().on("child_added", function (childSnapshot) {
            console.log(childSnapshot.val().email);
            console.log(childSnapshot.val().password);
        });
    };
    $('#signupUser').on('click', function (event) {
        event.preventDefault();
        newUser(email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                console.log(error);
            };
        });
        newUserData();
        $('#search-container').show();
        $('#signupUser').hide();
        $('#new-user-modal').hide();
        $('#imageContainer').hide();
    });

    $('#signinUser').on('click', function (event) {
        event.preventDefault();
        oldUser();
        firebase.auth().signInWithEmailAndPassword(oldEmail, oldPassword).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
        $('#search-container').show();
        $('#sign-in').hide();
        $('#return-user-modal').hide();
        $('#imageContainer').hide();
    });

});
