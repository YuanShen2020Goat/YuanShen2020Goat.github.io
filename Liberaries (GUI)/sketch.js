// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gui;
let s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui();
  s = createSlider("diameter", width/2, height*0.8, 128, 32, 40, 400);
}

function draw() {
  background(220);
  drawGui();
  circle(width/2, height/2, d);
}
