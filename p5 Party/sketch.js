// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shared = {painting: []}

function preload(){
  partyConnect("wss://demoserver.p5party.org","cs30party");
  shared = partyLoadShared("shared", shared);
}

function pickColor(){
  return random(colors);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = pickColor();
}

function renderPaint(){
  for(let p of shared.(p))
}

function draw() {
  background(220);
}
