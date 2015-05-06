//object
// var bill = {
// 	firstName: 'Bill',
// 	lastName: 'Clinton',
// 	favoriteFood: 'chicken wings',
// 	ocupation: 'president',
// 	//store objects within objects!
// 	phone: {
// 		cell: '123456789',
// 		//end the last propertie without a comma
// 		home: '987654321'
// 	}

// }

var contactList = {
	bill: {
		firstName: 'Bill',
		lastName: 'Clinton',
		favoriteFood: 'chicken wings',
		ocupation: 'president',
		//store objects within objects!
		phone: {
			cell: '123456789',
			//end the last propertie without a comma
			home: '987654321'
		}
	},

	cartman: {
		firstName: 'Eric',
		lastName: 'Carman',
		favoriteFood: 'Everything',
		ocupation: 'student',
		//store objects within objects!
		phone: {
			cell: '123456789',
			//end the last propertie without a comma
			home: '987654321'
		}
	},

	kenny: {
		firstName: 'Kenny',
		lastName: 'nameless',
		favoriteFood: 'beer',
		ocupation: 'trailer park boy',
		//store objects within objects!
		phone: {
			cell: '123456789',
			//end the last propertie without a comma
			home: '987654321'
		}
	}
}

//for in loop. for every contact in my contactList.
//runs through all of the first level objects inside of contactList
for(var contact in contactList){
	var contactInfo = contactList[contact];
	//produces a html element

	// step 1 make div
	var container = document.createElement('div');
	// step 2 make title
	var title = document.createElement('h2');
	// step 3 fill title with contact name
	title.innerHTML = 'my contact is named: ' + contactInfo.firstName;
	//place the html element wihtin the DOM
	//step 4 add titel to container
	container.appendChild(title);
	//step 5 add to webpage
	document.body.appendChild(container);

	console.log(contactList);
	//list everysingle element within the objects(contacts) inside contactList
	console.log(contactList[contact]);
}
var bill = contactList.bill;
//access data within an object using dot notation
console.log(bill.favoriteFood);
console.log(bill['favoriteFood']);