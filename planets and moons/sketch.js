// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global Variables
let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(70);
  myPlanet.display();
}

function mousePressed(){
  //regular click → add a moon
  //shift click → destroy and reset the moon
  if (keyIsDown && keyCode === SHIFT){
    myPlanet = new Planet(width/2, height/2);
  }
  else{
    myPlanet.createMoon();
  }
}




class Planet{
  //constructor
  constructor(x,y){
    this.x = x;   this.y = y;  this.s = 100;
    this.moons = [];
  }

  //class methods

  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }

  display(){
    //draw the planet + all of its moons
    circle(this.x, this.y, this.s);

    //for the moons
    for (let m of this.moons){
      m.update();
    }
  }
}

class Moon{
  constructor(x,y){
    this.x = x; this.y = y;  this.speed = random(1,5);
    this.angle = 0;  this.orbitRadius = random(80,250);
    this.s = random(5,50);
  }

  display(){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }

  move(){
    this.angle += this.speed;
  }

  update(){
    // helper function to handle calling the
    // class methods internally
    this.move();
    this.display();
  }


}