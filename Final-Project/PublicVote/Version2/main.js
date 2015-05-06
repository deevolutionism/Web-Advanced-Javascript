//Client-side javascript
var socket = io();

var submissions = document.querySelector('.submissions');

var option1, option2;
var newComparison;

console.log($('.thing-submit'));
$('.thing-form').on('submit', function (e) {
	e.preventDefault();

	//capture user form unput
	option1 = $('.option-1').val();
	option2 = $('.option-2').val();
	console.log(option1 + ' | ' + option2);
	//concatenate both inputs into a single string
	newComparison = option1 + ' > ' + option2;

	//send the new string over to the server for distribution
	socket.emit('comparison', newComparison);
	socket.on('comparison', function(msg){
		$('.submissions').append($('<li>').text(msg));
		//clear previous entry
		option1.val('');
		option2.val('');
		newComparison = '';
	});

	//send each option over individualy
	socket.emit('option1', option1);
	socket.emit('option2', option2);
	
	
	newComparison.innerHTML = option1 + ' > ' + option2;
	
});

//forms
function clearText() {
	
}

//submissions





//collect data on client side, update html with new data, emit data
//to server side. 
//store submissions in an array list
//emit 