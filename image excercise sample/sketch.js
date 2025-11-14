// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myImage;

function setup() {

  pixelDensity(1);
  myImage = await loadImage("assets/chips.jpg");
  createCanvas(600, 600);
}

function colorEffect(){
  for(let i = 0; i < pixels.length; i+=4){
    pixels[i] = 0;
    pixels[i+2] = pixels[i+2] / 2
  }
}

function draw() {
  background(220);
  image(myImage,0,0);
  loadPixels();

    colorEffect();
    
  updatePixels();
}
