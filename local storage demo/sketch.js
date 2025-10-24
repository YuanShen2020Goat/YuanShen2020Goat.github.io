// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mySquare;
let totalBounces = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  mySquare = new Bouncer(width/2, height/2);
  textSize(30);
  textAlign(CENTER, CENTER);
  if(localStorage.getItem("numBounces")===null){
    localStorage.setItem("numBounces", 0);
  }
  else{ //implies a stored number of bounces
    totalBounces = int(localStorage.getItem("numBounces"));
  }
}

function keyPressed(){
  print("delete");
  localStorage.setItem("numBounces", 0);
  totalBounces = 0;
}

function draw() {
  background(220);
  mySquare.move();
  mySquare.display();
  text(totalBounces, width/2, height/2);
}



class Bouncer{
  constructor(x, y){
    this.x = x;   this.y = y;
    this.xSpeed = random(-5,5);
    this.ySpeed = random(-5,5);
  }

  //class methods
  display(){
    square(this.x, this.y, 30);
  }

  move(){
    //calculate new position
    this.x += this.xSpeed;   this.y += this.ySpeed;

    //should we bounce?  x first
    if(this.x < 0 || this.x > width){
      this.xSpeed *= -1;
      totalBounces++;
      localStorage.setItem("numBounces", totalBounces);
    }

    if(this.y < 0 || this.y > height){
      this.ySpeed *= -1;
      totalBounces++;
      localStorage.setItem("numBounces", totalBounces);
    }
  }

}