Big[] ParticlesBig = new Big[10];
Medium[] ParticlesMedium = new Medium[20];
Small[] ParticlesSmall = new Small[20];



void setup() {
  size(1024,768);
  
  for (int i = 0; i < ParticlesBig.length; i++) {
    ParticlesBig[i] = new Big(random(0, width), random(0, height));
  }
  for (int i = 0; i < ParticlesMedium.length; i++) {
    ParticlesMedium[i] = new Medium(random(0, width), random(0, height));
  }
    for (int i = 0; i < ParticlesSmall.length; i++) {
    ParticlesSmall[i] = new Small(random(0, width), random(0, height));
  }
}


void draw() {
  fill(0,0,0,10);
  rect(0,0,width,height);
  universe();
}


void universe() {
  for (int i=0; i < ParticlesBig.length; i++) {
    ParticlesBig[i].display();
    ParticlesBig[i].move();
    ParticlesBig[i].collision();
  }
  for (int i=0; i < ParticlesMedium.length; i++) {
    ParticlesMedium[i].display();
    ParticlesMedium[i].move();
    ParticlesMedium[i].collision();
  }
  for (int i=0; i < ParticlesSmall.length; i++) {
    ParticlesSmall[i].display();
    ParticlesSmall[i].move();
    ParticlesSmall[i].collision();
  }
}

