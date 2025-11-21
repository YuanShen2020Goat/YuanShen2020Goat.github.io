// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  if(mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY));
  }

  for (let o of objects){
    // if(keyIsDown(32)){
    o.move();
    // }
    // o.calcMouse();
    o.display();
  }
}

class Ball{
  constructor(x,y){
    this.c = fill(random(255, 0), random(255, 0), random(255, 0));
    this.pos = createVector(x,y);
    this.vel = createVector(random(-5, 5), -5);
    this.grav = createVector(0, 0.2);
  }

  calcMouse(){
    this.grav = createVector(mouseX, mouseY);
    this.grav.sub(this.pos);
    this.grav.normalize();
    this.grav.mult(4);
  }

  move(){
    this.vel.add(this.grav);
    this.vel.limit(20);
    this.pos.add(this.vel);

    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }

    if(this.posY > height){
      this.vel.y *= -1;
    }
  }

  display(){
    circle(this.pos.x, this.pos.y, 20);

    if (false){
      stroke(255, 0, 0);
      line(0, 0, this.pos.x, this.pos.y);

      let endX = this.pos.x + this.vel.x;
      let endY = this.pos.y + this.vel.y;
      
      stroke(0, 0, 255);
      line(this.pos.x, this.pos.y);
      line(endX, endY, endX + this.grav.x, endY + this.grav.y);
    }
  }
}