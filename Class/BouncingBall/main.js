var posX = 0;
var posY = 0;

var velX = 3;
var velY = 5;

var ball = $('.ball');

update();
boundaries();

function update() {
	posX += velX;
	posY += velY;

	ball.css('left', posX);
	ball.css('top', posY);

	requestAnimationFrame(update);


};

function boundaries() {
	if(posX > $(window).width()){
		velX *= -1;
		posX = $(window).width();
	}

	if(posX < 0){
		velX *= -1;
		posX = 0;
	}

	if(posY > $(window).height()){
		velY *= -1;
		posY = $(window).height();
	}

	if(posY < 0){
		velY *= -1;
		posY = 0;
	}
};
