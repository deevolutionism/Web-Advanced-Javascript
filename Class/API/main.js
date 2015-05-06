// //ask for data from external source
// $.ajax({
// 	//what data do we want? pull from url. Using OOP notation
// 	url: 'http://api.wunderground.com/api/98b6e6802b143d65/conditions/q/CA/San_Francisco.json',
// 	dataType: 'jsonp', //jsonp stands for padded json
// 	success: function(data) {
// 		console.log('success!');
// 		//can write normal javascript within this function

// 		var conditionsImage = document.querySelector('.conditions-img');
// 		conditionsImage.src = data.current_observation.icon_url;

// 		var conditionsTemp = document.querySelector('.conditions-temp');
// 		conditionsTemp.innerHTML = data.current_observation.temp_f;

// 		var conditionsWind = document.querySelector('.conditions-wind');
// 		conditionsWind.innerHTMl = data.current_observation.wind_string;
// 	},
// 	error: function() {
// 		console.log('error!');
// 	}
// });

// $.ajax({
// 	//what data do we want? pull from url. Using OOP notation
// 	url: 'http://api.wunderground.com/api/98b6e6802b143d65/forecast10day/q/CO/DENVER.json',
// 	dataType: 'jsonp',
// 	success: function(data) {
// 		console.log('fuck yeah!');
// 		// console.log(data);

// 		var forecast = data.forecast.txt_forecast.forecastday;

// 		for(var i = 0; i < forecast.length; i++){
// 			console.log(forecast[i].fcttext);

// 			var forecastDay = document.createElement('div');
			

// 			var forecastIcon = document.createElement('img');
// 			forecastIcon.src = forecast[i].icon_url;

// 			var forecastTitle = document.createElement('h2');
// 			forecastTitle.innerHTML = forecast[i].title;

// 			var forecastDescription = document.createElement('p');
// 			forecastDescription.innterHTML = forecast[i].fcttext;


// 			forecastDay.appendChild(forecastTitle);
// 			forecastDay.appendChild(forecastIcon);
// 			forecastDay.appendChild(forecastDescription);




// 			var forecastContainer = document.querySelector('.forecast');
// 			forecastContainer.appendChild(forecastDay); //find body, append p tag.
// 		}
// 	},
// 	error: function(error) {
// 		console.log('ur out of luck bitch');
// 		console.log(error);
// 	}


// });


$.ajax({
	url: 'https://api.instagram.com/v1/media/popular?client_id=1097141572ea4fc489c0c604a03c1a51',
	dataType: 'jsonp',
	sucess: function(data){
		console.log('fuck yeah BOY!');
		console.log(data);
		var instagramImg = data.data;
		for (var i = 0; i < instagramImg.length; i++){

			var myImage = document.createElement('img');
			myImage.src = instagramImg[i].images.standard_resolution.url;

			var instagramContainer = document.querySelector('.instagram');
			instagramContainer.appendChild(myImage);
		}


	},
	error: function(error){
		console.log(error);
	}
});




