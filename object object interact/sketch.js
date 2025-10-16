// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//GLOBAL VARIABLES
let nodes = [];
let reach = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  //create one node per mousePress
  nodes.push(new csNode(mouseX, mouseY));
  
  
  //[csNode, csNode, csNode]
  //   0        1       2
}

function draw() {
  background(220);

  //loop by item is good when we don't
  //plan on deleting objects from array
  for(let n of nodes){
    n.move();
    n.display();
    n.connect(nodes);
  }

 
}

class csNode{
  //1. Constructor
  constructor(x,y){
    //properties related to position/display
    this.x = x;  this.y = y;  this.size = 20;
    this.c = color(random(255),random(255),random(255));

    //properties related to movement
    this.xTime = random(10);  this.yTime = random(10);
    this.timeShift = 0.01;  this.maxSpeed = 5;
  }

  //2. Class Methods
  display(){   //draw our csNode as a circle on canvas
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.size);
  }

  move(){
    //use perlin noise for x/y movement
    let xSpeed = noise(this.xTime);  //0 - 1
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;
    if(this.x < 0) this.x = width;
    else if (this.x > width) this.x = 0;

    // ---- now the same for Y -----------
    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;

    this.y += ySpeed;
    if(this.y < 0) this.y = height;
    else if (this.y > height) this.y = 0;
  }

  connect(nodeArray){
    //check if the current point is close to any other
    //points. If so, join with a line.
    stroke(this.c);
    for(let n of nodeArray){
      //this.x  this.y   n.x  n.y
      if(n !== this){ //make sure not to compare to self
        let d = dist(this.x, this.y, n.x, n.y);
        if(d < reach){ //the two point ARE close...
          line(this.x, this.y, n.x, n.y);
        }
      }
    }
  }


}