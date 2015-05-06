var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [12, 11, 5, 4, 3, 2],
    backlight: 10,
    rows: 2,
    cols: 16
  });

  var frame = 1,
    col = 0,
    row = 0;

  // lcd.display();
  lcd.clear();
  lcd.blink().print("i am alive");
  // lcd.useChar("runninga");
  // lcd.useChar("runningb");
 

  board.loop(300, function() {

    lcd.clear().cursor(row, col).print(
      ":running" + (++frame % 2 === 0 ? "a" : "b") + ":"
    );

    if (++col === lcd.cols) {
      col = 0;

      if (++row === lcd.rows) {
        row = 0;
      }
    }
  });
});
