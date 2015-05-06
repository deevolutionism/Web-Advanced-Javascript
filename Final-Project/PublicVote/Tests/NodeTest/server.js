// SERVER
var http  = require('http')
  , fs    = require('fs')
  , path  = require('path')
  , mime  = require('mime')
  , cache = {};

function send404(response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write('Error 404: resource not found.');
  response.end();
}

function sendFile(response, filePath, fileContents) {
  response.writeHead(
    200,
    {"content-type": mime.lookup(path.basename(filePath))}
  );
  response.end(fileContents);
}

function serveStatic(response, cache, absPath) {
  if (cache[absPath]) {
    sendFile(response, absPath, cache[absPath]);
  } else {
    fs.exists(absPath, function(exists) {
      if (exists) {
        fs.readFile(absPath, function(err, data) {
          if (err) {
            send404(response);
          } else {
            cache[absPath] = data;
            sendFile(response, absPath, data);
          }
        });
      } else {
        send404(response);
      }
    });
  }
}

var server = http.createServer(function(request, response) {
  var filePath = false;
  if (request.url == '/') {
    filePath = 'index2.html';
  } else {
    filePath = request.url;
  }
  var absPath = './' + filePath;
  serveStatic(response, cache, absPath);
});

server.listen(8080, function() {
  console.log("Server listening on port 8080.");
});

//votes
var votes1 = 0;
var votes2 = 0; 

//SOCKET
var io = require('socket.io').listen(server);

//JOHNNY-FIVE
var five = require('johnny-five'),
	bumper1, bumper2, led1, led2,
	board = new five.Board();

io.set('log level', 1);

io.sockets.on('connection', function(socket){

	//initilize board connection
	board.on('voteTally1', function(){
		socket.emit('voteTally1', votes1); //emit votes1
		console.log('sent vote1 data!');
	});

	board.on('voteTally2', function(){
		socket.emit('voteTally2', votes2);
		console.log('sent vote2 data!');
	});

});

board.on('ready', function() {
	bumper1 = new five.Button(13);
	bumper2 = new five.Button(12);
	led1 = new five.Led(11);
	led2 = new five.Led(10);

	//https://github.com/rwaldron/johnny-five/blob/master/docs/lcd-runner.md
	// var lcd = new five.LCD({
 //    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
 //    // Arduino pin # 7    8   9   10  11  12
 //    pins: [8, 9, 4, 5, 6, 7],
 //    backlight: 3,
 //    rows: 2,
 //    cols: 16
 //  });

 //  var frame = 1,
 //    col = 0,
 //    row = 0;

 //  lcd.display();
 //  lcd.useChar("runninga");
 //  lcd.useChar("runningb");

 //  board.loop(300, function() {

 //    lcd.clear().cursor(row, col).print(
 //      ":running" + (++frame % 2 === 0 ? "a" : "b") + ":"
 //    );

 //    if (++col === lcd.cols) {
 //      col = 0;

 //      if (++row === lcd.rows) {
 //        row = 0;
 //      }
 //    }
 //  });

	bumper1.on('hit', function(){
		votes1 += 1;
		led1.off();
		led2.on();
		board.emit('voteTally1');
		console.log('button 1 pressed');
		console.log(votes1);
	});

	bumper2.on('hit', function(){
		votes2 += 1;
		led1.off();
		led2.on();
		board.emit('voteTally2');
		console.log('button 1 pressed');
		console.log(votes1);
	});

});


