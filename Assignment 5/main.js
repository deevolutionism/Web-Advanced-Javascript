var posX = 0;
var posY = 0;

var velX = 3;
var velY = 5;

var ball = $('.ball');

var pongHeight = $('.container-pong').css('height');

var p1Score = $('.p1-score');
var p2Score = $('.p2-score');
var p1,p2 = 0;

var p1Paddle = $('.paddle-player1');
var p2Paddle = $('.paddle-player2');

var p1PosY = 0;
var p2PosY = 0; 

var upArrow;
var downArrow;
var upW;
var downS;

var width;

update();

function update() {
	requestAnimationFrame(update);
	move();
	boundaries();
	score();
	paddles();
	width = $(window).width();
	}

function move() {
	posX += velX;
	posY += velY;

	//console.log(posX);
	

	ball.css('left',posX);
	ball.css('top',posY);

	
}

function boundaries() {

	if (posX+50 >= width || posX < 0){
		velX *= -1;

	} 

	if (posY+50 >= 500 || posY < 0){
		velY *= -1;
	}

	//p1 paddle collision
	if (posX <= (width)*.01) {
			if (posY > p1PosY +50 && posY < p1PosY + 50){
				velX *= -1;
				console.log('hit');
				console.log('posX: ' + posX);
				console.log('p1PosY: ' + posX+50);

			}	
	}

	//p2 paddle collision
	if (posX >= (width)*.99){
		if(posY > p2PosY + 50 && posY < p2PosY + 50 ){
			velX *= -1;
		}
	}
	
}

function score() {
	if(posX <= 0) {
		p1 ++;
		p1Score.text = p1;
		console.log(p1);
	}

	if(posX + 50 >= width){
		p2 ++;
		p2Score.text = p2;
		console.log(p2);
	}
}

function paddles() {
	// JavaScript Document

	if(upArrow == true){
		p1PosY -= 5;
	} else if(downArrow == true){
		p1PosY += 5;
	}
	if(upW == true){
		p2PosY -= 5;
	} else if(downS == true){
		p2PosY += 5;
	}

	p1Paddle.css('top',p1PosY);
	console.log(p1PosY);
	p2Paddle.css('top',p2PosY);

	$(document).keydown(onKeyDown);
	$(document).keyup(onKeyUp);

	function onKeyDown(evt) {
		if(evt.keyCode == 38) { upArrow = true;
			if(p1PosY <= 0){
				p1PosY = 0;
				upArrow = false;
			}
		} else if (evt.keyCode == 40){ downArrow = true;
			if(p1PosY >= 400){
				p1PosY = 400;
				downArrow = false;
			}
		}
		if(evt.keyCode == 87) { upW = true;
			if(p2PosY <= 0){
				p2PosY = 0;
				upW = false;
			}
		}
		if(evt.keyCode == 83) { downS = true;
			if(p2PosY >= 400){
				p2PosY = 400;
				downS = false;
			}
		}


	}

	function onKeyUp(evt) {
		if(evt.keyCode == 38) { upArrow = false;
		}
		if (evt.keyCode == 40) { downArrow = false;
		}
		if(evt.keyCode == 83) { downS = false;
		}
		if(evt.keyCode == 87) { upW = false;
		}
	}
}


//debugging and show mouse position

var IE = document.all?true:false


           if (!IE) document.captureEvents(Event.MOUSEMOVE)


            document.onmousemove = getMouseXY;


            var tempX = 0
            var tempY = 0



            function getMouseXY(e) {
                if (IE) { 

                tempX = event.clientX + document.body.scrollLeft
                tempY = event.clientY + document.body.scrollTop
                } 
                else 
                {  
                 tempX = e.pageX
                 tempY = e.pageY
                }  


                document.Show.MouseX.value = tempX
                document.Show.MouseY.value = tempY

                return true
                }