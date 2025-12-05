// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
  background(220);
  orbitControl();
  lights(100);
  angle = map(mouseX, 0, width, -120, 120)
  fill(100, 255, 100);
  for(let i = 0; i < 360; i+= 45){
    push();
    rotateY(radians(i));
    drawbox(100);
    pop();
  }

}

let angle;

function drawBox(size){
  if(size > 3){
    rotateZ(radians(angle));
    translate(size * 1.5, 0);
    box(size);
    drawBox(size * 0.8);
  }
}