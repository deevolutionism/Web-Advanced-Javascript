var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	// res.send('<h1>Hello World</h1>');
	// res.sendFile(__dirname + '/index.html');
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	// console.log('a user connected');
	//receive message on server-side
	socket.on('chat-message', function(msg){
		console.log('message: ' + msg);
	});
	//send message back to everyone
	socket.on('chat-message', function(msg){
		io.emit('chat-message', msg);
	});

	socket.on('disconnect', function(){
		console.log('a user disconnected');
	});
});



http.listen(3000, function(){
	console.log('listen on *:8080');
});
