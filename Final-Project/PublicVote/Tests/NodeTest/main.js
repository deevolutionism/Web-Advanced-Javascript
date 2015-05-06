var button = $('.button');

button.on('click', function() {
		var thing1 = document.contactform.thing1.value;

		var thing2 = document.contactform.thing2.value;

		var subArea = document.getElementbyId('submissions');

		var submission = document.createElement('p');

		submission.innerHTML = thing1 + ">" thing2;

		subArea.appendChild(submission);
		document.body.appendChild('submissions');
});