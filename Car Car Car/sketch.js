// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let eastbound = [];
let westbound = [];
let trafficLight;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < 20; i++){
    let yEast = random(windowHeight/4, windowHeight/4 + 150);
    eastbound.push(new Vehicle(random(windowWidth), yEast, int(random(0, 2)), random(1, 5)));

    let yWest = random(windowHeight/4 + 250, windowHeight/4 + 350);
    westbound.push(new Vehicle(random(windowWidth), yWest, int(random(0, 2)), random(-1, -5)));
  }

}

function draw() {
  background(220);
  fill( 100, 100, 100);
  drawRoad();

  for (let v of eastbound){
    v.action();
  }
  for (let v of westbound){
    v.action();
  }
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
  constructor(x, y, type, xSpeed){
    this.type = type;
    this.c = color(random(255), random(255), random(255));
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
  }

  move(){
    this.x += this.xSpeed;

    if (this.xSpeed > 0){
      if(this.x > windowWidth){
        this.x = 0;
      }
    }
    else{
      if(this.x < 0){
        this.x = windowWidth;
      }
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
    fill(this.c);
    if (this.type === 0) this.drawCar();
    else this.drawTruck();
  }

  drawCar(){
    fill(0);
    rect(this.x + 5, this.y - 5, 10, 30);
    rect(this.x + 35, this.y - 5, 10, 30);
    fill(this.c);
    rect(this.x, this.y, 50, 20);
  }

  drawTruck(){
    fill(this.c);
    rect(this.x, this.y, 120, 30);
    fill(255);
    rect(this.x - 30, this.y + 2.5, 30, 25);
  }

  action(){
    this.move();
    this.display();
  }
}

