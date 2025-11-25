// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

// function centerCircle(x, y, d){
//   if(d > 10){
//     circle(x,y,d);
//     centerCircle(x,y,d * 0.9);
//   }
// }

function circleFractal(x, y, d){
  if(d > 10){
    circle(x,y,d);
    circleFractal(x - d/2, y, d/2);
    circleFractal(x + d/2, y, d/2);
    circleFractal(x, y + d/2, d/2);
    circleFractal(x, y - d/2, d/2);
  }
} 

function setFill(x,y,s){
  if(dist(mouseX, mouseY, x,y) < s/2){
    strokeWeight(5);
  }
  else strokeWeight(1);
}

function luckySquare(x,y,s){
  if(s > 10){
    push()
    let r = map(x, 0, width, 0, 255);
    let g = map(x, 0, height, 0, 255);
    let b = map(x, 0, width, 0, 255);
    stroke(r,g,b);
    translate(x,y);
    rotate(radians(frameCount));
    setFill(x,y,s);
    square(0,0,s);
    pop();
    luckySquare(x-s/2, y-s/2, s*0.5);
    luckySquare(x-s/2, y+s/2, s*0.5);
    luckySquare(x+s/2, y-s/2, s*0.5);
    luckySquare(x+s/2, y+s/2, s*0.5);

  }
}

function draw() {
  rectMode(CENTER);
  noFill();
  background(0);
  stroke(255);
  // circleFractal(width/2, height/2, width);
  luckySquare(width/2, height/2, width/2);
}
