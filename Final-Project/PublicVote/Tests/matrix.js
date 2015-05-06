var five = require("johnny-five");
var board = new five.Board();


board.on("ready", function() {
  var count = 10;
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



  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33",
    rotation: 2,
  });

  matrix.clear();
  matrix.draw(count);
});
