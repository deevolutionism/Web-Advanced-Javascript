Big[] ParticlesBig = new Big[10];



void setup() {
  size(400,400);
  for (int i = 0; i < ParticlesBig.length; i++) {
    ParticlesBig[i] = new Big(random(0, width), random(0, height));
  }
}


void draw() {
  
  background(0);
  universe();
}


void universe() {
  for (int i=0; i < ParticlesBig.length; i++) {
    ParticlesBig[i].display();
    ParticlesBig[i].move();
    ParticlesBig[i].collision();
  }
}

