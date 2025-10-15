// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBall = new Ball(100, 100);
}

function draw() {
  background(220);
  myBall.move();
  myBall.display();

  if(mouseIsPressed){
    ballCollection.push(new Ball(mouseX, mouseY));
  }

  for(let b of ballCollection){
    b.move();
    b.display();
  }
}

class Ball{
  constructor(x, y){
    this.x = x; this.y = y;
    this.c = color(random(255), random(255), random(255));
    this.size = 15;
    this.speed = random(2, 10);
  }

  display(){
    fill(this.c);
    circle(this.x, this.y, this.size);
  }

  move(){
    this.x += this.speed;
    if(this.x > width) this.x = 0;
  }
}