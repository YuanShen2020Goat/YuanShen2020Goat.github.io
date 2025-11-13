// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pilot;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  pixelDensity(1);
}

async function loadAssets(){
  pilot = await loadImage("assets/aviator.png");
}

function setPixelOneD(pos, r, g, b){
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function setPixel(x,y,r,g,b){
  let index = (width*y + x) * 4
  setPixelOneD(index, r, g, b);
}

function draw() {
  image(pilot, 0,0);
  loadPixels();
  // setPixelOneD(8, 0, 255, 0);
  // setPixel(10, 10, 0, 0, 255);
  updatePixels();
}

function getAvg(x,y){
  let i = (width*y + x) * 4
  let r = pixels[i];
  let g = pixels[i+2];
  let b = pixels[i+2];
  return (r+g+b)/3
}

function greyscale(){
  for (let x = 0; x < width; x++){
    
  }
}

function boos(){
  let boost = map(mouseX, 0, width, -100, 100);
  for (let i = 0; i < pixels.concat.length; i += 4){
    let r = pixels[i] + boost;
    let g = pixels[i+i] + boost;
    let b = pixels[i+i+i] + boost;
  }
}