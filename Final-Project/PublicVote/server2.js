// SERVER

var http  = require('http')
  , fs    = require('fs')
  , path  = require('path')
  , mime  = require('mime')
  , cache = {};


var pastVotes = [];

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

// track votes
var votes1 = 0;
var votes2 = 0; 
var voteTotal = 0;
var height = 500;
var barHeight1;
var barHeight2;

var percent1;
var percent2;

var thing1 = '';
var thing2 = '';


function barHeight() {
    percent1 = votes1/voteTotal;
    percent2 = votes2/voteTotal;
    barHeight1 = (height*percent1) | 0;
    barHeight2 = (height*percent2) | 0;
    // votes1 = barHeight1;
    // votes2 = barHeight2;
}


// use socket.io
var io = require('socket.io').listen(server);

// arduino vars
var five = require("johnny-five"),
    bumper1, bumper2, led1, led2, test,
    board = new five.Board();



//turn off debug
io.set('log level', 1);

// define interactions with client
io.sockets.on('connection', function(socket){


    //send data to client    
   /* board.on('voteTally1', function(){
        
        socket.emit('vote1', votes1);
        console.log('sent vote1 data!')

    }); */
    
    board.on('voteTally1', function(){
       
        socket.emit('voteTally1', barHeight1);
        console.log('sent vote1 data!');

    });

    board.on('voteTally2', function(){ //function activated from bumper2 board.emit function.
        
        
        socket.emit('voteTally2', barHeight2); //pass votesTally2 onto the client with Votes2 data.
        console.log('sent vote2 data!');
    });

    //recieve new comparison from submitted form
    socket.on('comparison', function(msg){
      //send the comparison back to client for update
      console.log('new comparison: ' + msg);
      io.emit('comparison', msg);
    });

    //recieve new comparison input, store each value individually for later use
    socket.on('option1', function(data){
      console.log('option-1: ' + data);
      thing1 = data;

    });

    socket.on('option2', function(data){
      console.log('option-2: ' + data);
      thing2 = data;
    })

    
});




board.on("ready", function() {
  bumper1 = new five.Button(6);
  bumper2 = new five.Button(7);
  // led1 = new five.Led(8);
  // led2 = new five.Led(9);
  
  var heart = [
    "00000000",
    "00000000",
    "00110110",
    "00110110",
    "00000000",
    "00100010",
    "00111110",
    "00000000"
  ];

  var matrix1 = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33",
    rotation: 4,
  });

  
  // var matrix2 = new five.Led.Matrix({
  //   addresses: [0x71],
  //   controller: "HT16K33",
  //   rotation: 2,
  // });


  var lcd1 = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 12  11   5   4   3   2
    pins: [12, 11, 5, 4, 3, 2],
    rows: 2,
    cols: 16
  });

  var frame1 = 1,
    col1 = 0,
    row1 = 0;


  var lcd2 = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 22  24   26  28  30  32
    pins: [22, 24, 26, 28, 30, 32],
    rows: 2,
    cols: 16
  });

  var frame2 = 1,
    col2 = 0,
    row2 = 0;

  board.loop(300, function() {

    lcd1.clear().cursor(row1, col1).print(thing1);

    if (++col1 === lcd1.cols) {
      col1 = 0;

      if (++row1 === lcd1.rows) {
        row1 = 0;
      }
    }


    lcd2.clear().cursor(row2, col2).print(thing2);

    if (++col2 === lcd2.cols) {
      col2 = 0;

      if (++row2 === lcd2.rows) {
        row2 = 0;
      }
    }



  });


  
 
  
  
 
  bumper1.on("hit", function() {
    votes1 += 1;  
    voteTotal = votes1 + votes2;
    barHeight();
    // led1.off(); 
    // led2.on(); 
    board.emit('voteTally1'); 
    console.log('button 1 pressed'); 
    console.log(votes1); 
    // lcd.clear();
    // lcd.print("hello");

    if (votes1 >= 99) {
      addToHistory();
    }
  
  }); 

  bumper2.on("hit", function() {
    votes2 += 1;
    voteTotal = votes1 + votes2;
    barHeight();
    matrix1.clear();
    matrix1.draw(votes2);
    // led1.on();
    // led2.off();
    board.emit('voteTally2'); //activates function that it is matched to.
    console.log('button 2 pressed'); 
    console.log(votes2); 
  }); 
  });

  function addToHistory() {
    var oldVote = {
      categoryA: thing1,
      categoryB: thing2,
      voteA: votes1,
      voteB: votes2
    }

    pastVotes.push(oldVote);
    socket.emit('oldVotes', {votes: oldVote});
  }

// });