class Big {
  PVector location, speed;
  float size;
  float xoff = 0.0;

  Big(float x, float y) {
    size = 2;
    location = new PVector(0, 0);
    speed = new PVector(0, 8);
    location.x = x;
    location.y = y;
  }




  void display() {
    noStroke();
    xoff = xoff + .01;
    float n = noise(xoff) * 255;
    fill(n);
    ellipse(location.x, location.y, size*4, size*8);
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

