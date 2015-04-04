var posX = 0;
var posY = 0;

var velX = 3;
var velY = 5;

var ball = $('.ball');

var pongHeight = $('.container-pong').css('height');

var p1Score = $('.p1-score');
var p2Score = $('p2-score');

var p1,p2 = 0;

var p1Paddle = $('.paddle-player1');
var p2Paddle = $('.paddle-player2');

var p1PosY = 250;
var p2PosY = 250;

update();
move();

function update() {
	move();
	boundaries();
	score();
	paddles();
	requestAnimationFrame(update);
}

function move() {
	posX += velX;
	posY += velY;

	

	ball.css('left',posX);
	ball.css('top',posY);

	
}

function boundaries() {

	if (posX+50 >= $(window).width() || posX < 0){
		velX *= -1;
	} 

	if (posY+50 >= 500 || posY < 0){
		velY *= -1;
	}
}

function score() {
	if(posX <= 0){
		p1++;
		p1Score.innterHTML = p1;
	}

	if(posX >= $(window).width()){
		p2++;
		p2Score.innerHTML = p2;
	}
}

function paddles() {
	// JavaScript Document
	p1Paddle.css('top',p1PosY);
	p2Paddle.css('top',p2PosY);

	$(document).keydown(function(e){
		switch(e.which){
			case 38:
				p1PosY -= 1;
				break;
			case 40:
				p1PosY += 1;
				break;
		}
	

	})
	console.log(p1PosY);
}