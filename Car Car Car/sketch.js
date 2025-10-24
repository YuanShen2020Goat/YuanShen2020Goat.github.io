// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill( 100, 100, 100);
  drawRoad();
}

function drawRoad(){
noStroke();
rect(0, windowHeight/4, windowWidth, 500);
for (let x = 0; x < windowWidth; x += 100){
  fill(255, 255, 255);
  rect(x, windowHeight/2, 70, 10);
  }
}

class Vehicle{
  constructor(type, color, x, y, direction, xSpeed){
    this.type = type;
    this.color = color(random(255), random(255), random(255));
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = xSpeed;
  }

  move(){
    this.x += this.xSpeed;
    if(this.x > windowWidth){
      this.x = 0;
    }
  }

  speedUp(){
    if(this.xSpeed < 15){
      this.xSpeed += 0.;
    }
  }

  speedDown(){
    if (this.xSpeed > 0) {
      this.xSpeed -= 0.;
    }
  }

  changeClor(){
    this.c = color(random(255), random(255), random(255));
  }

    
  display(){
     fill(this.color);
    if (this.type === 0) this.drawCar();
    else this.drawTruck();
  }

  drawCar(){
    fill(this.c);
    rect(this.x, this.y, 50, 20);
    fill(0);
    rect(this.x + 5, this.y - 5, 10, 30);
    rect(this.x + 35, this.y - 5, 10, 30);
  }

  drawTruck(){
    fill(this.c);
    rect(this.x, this.y, 120, 30);
    fill(255);
    rect(this.x - 30, this.y + 2.5, 30, 25);
  }
}

