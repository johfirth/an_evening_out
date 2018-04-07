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
var tmqueryUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?' + events + 'apikey=RIQwqKGOlNCjdsTch4qC32WaCBv94S9d';

$.ajax({
    url: tmqueryUrl,
    method: 'GET',
}).then(function (response) {
    console.log(tmqueryUrl);
    console.log(response);
});

var fanqueryUrl = 'http://api.fandango.com/v1/?city=richmond$apikey=AIzaSyD8ZlQHJD8Ewnv3Rf4vswI3D76vybw-0Hk'

$.ajax({
    url: fanqueryUrl,
    method: 'GET',
}).then(function (response) {
    console.log(fanqueryUrl);
    console.log(response);
});



op=performancesbymoviepostalcodesearch&movieid=151500&postalcode=94105&apikey=mcgcv6cxjnhgy8wajybxbup2+&sig=cccc2a0ac7dbf04b413cdbfd65f4f4e335833405fee3333ad03a4e0c8a0c36de





<form id="returnclient-form">
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="oldEmail" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="oldPassword" placeholder="Password">
</div>
<button type="submit" class="btn btn-primary" id='signinUser'>Submit</button>

</form>