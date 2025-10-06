// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function grid(){
  strokeWeight(30);
  let x = 0; let y = 0;
  while (x < width){
    while( y < height){
      if(abs(width/2 - x) > 100){
        point(x, y);
      }
      y += gridSize;
    }
    x += gridSize;
  }
}

function draw() {
  background(220);
  grid();
}
