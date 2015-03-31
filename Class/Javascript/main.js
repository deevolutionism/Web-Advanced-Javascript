
//make mad libs

var allBoxes = document.querySelectorAll('.box');
var boxes = document.querySelector('.box');
console.log(allBoxes.length);

var myBody = document.querySelector('body');

var blackBox1 = document.querySelector('.box-1');
var blackBox2 = document.querySelector('.box-2');
var blackBox3 = document.querySelector('.box-3');
var blackBox4 = document.querySelector('.box-4');



var paragraph = document.querySelector('.paragraph');
var paragraphText = paragraph.innerHTML;

var myRandomWords = ['apple','oranges','bananas','peaches','plum'];





blackBox1.addEventListener('click', function (event) {
	console.log(event);
	// document.body.style.backgroundColor = '#000';
	// paragraph.style.color = '#000';
	// paragraph.style.border = '1px solid purple';
	paragraph.classList.add('paragraph-1');
	paragraph.classList.remove('paragraph-2');
	paragraph.classList.remove('paragraph-3');
	paragraph.classList.remove('paragraph-4');
	getNewWord();

	// document.body.style.color = '#000';

}); //two arguments. Event, function. <- the function is embeded within this.

blackBox2.addEventListener('click', function (event) {
	console.log(event);
	//document.body.style.backgroundColor = '#ff0000';
	// paragraph.style.color = '#ff0000';
	paragraph.classList.remove('paragraph-1');
	paragraph.classList.add('paragraph-2');
	paragraph.classList.remove('paragraph-3');
	paragraph.classList.remove('paragraph-4');
	getNewWord()
	;

}); //two arguments. Event, function. <- the function is embeded within this.

blackBox3.addEventListener('click', function (event) {
	console.log(event);
	randomWord();
	// document.body.style.backgroundColor = '#00ff00';
	// paragraph.style.color = '#00ff00';
	paragraph.classList.remove('paragraph-1');
	paragraph.classList.remove('paragraph-2');
	paragraph.classList.add('paragraph-3');
	paragraph.classList.remove('paragraph-4');

}); //two arguments. Event, function. <- the function is embeded within this.

blackBox4.addEventListener('click', function (event) {
	console.log(event);
	randomWord();
	// document.body.style.backgroundColor = '#0000ff';
	// paragraph.style.color = '#0000ff';
	paragraph.classList.remove('paragraph-1');
	paragraph.classList.remove('paragraph-2');
	paragraph.classList.remove('paragraph-3');
	paragraph.classList.add('paragraph-4');


}); //two arguments. Event, function. <- the function is embeded within this.




function getNewWord() {
	var randomNumber = Math.floor(Math.random() * myRandomWords.length); //built in random number generator ranged from length of the array. Math.floor rounds numbers to an int.
	var randomWord = myRandomWords[randomNumber];
	paragraph.innerHTML = randomWord;
}











