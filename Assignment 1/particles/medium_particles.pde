class Medium {
  PVector location, speed;
  float size;

  Medium(float x, float y) {
    size = 2;
    location = new PVector(0, 0);
    speed = new PVector(0, 1);
    location.x = x;
    location.y = y;
  }




  void display() {
    noStroke();
    fill(255);
    ellipse(location.x, location.y, size, size*4);
  }


  void move() {
    location.y += speed.y;
  }

  void collision() {
    if (location.y > height) {
     location.y = 0; 
     location.x = random(0,width);
    }
  }
  
  
}
