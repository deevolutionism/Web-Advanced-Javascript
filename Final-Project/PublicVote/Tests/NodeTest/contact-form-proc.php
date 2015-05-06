<?php 

// if(empty($_POST['submit'])) {

// 	echo "Form is not submitted";
// 	exit;

// }

// if(empty($_POST['thing1']) || empty($_POST['thing2'])) 
// 	{
// 		echo "please fill the form"
// 		exit;
// 	}

$thing1 = $_POST['thing1'];
$thing2 = $_POST['thing2'];

<script>
	document.contactform.onsubmit=function(){
		var thing1 = document.contactform.thing1.value;

		var thing2 = document.contactform.thing2.value;

		var subArea = document.getElementbyId('submissions');

		var submission = document.createElement('p');

		submission.innerHTML = thing1 + ">" thing2;

		subArea.appendChild(submission);
		document.body.appendChild('submissions');
	}
</script>

?>