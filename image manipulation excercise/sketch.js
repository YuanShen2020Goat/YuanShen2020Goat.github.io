// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let myImage;

function setup() {
  createCanvas(601, 602);
  pixelDensity(1);
  loadAssets();

}

async function loadAssets() {
  // choose the image
  myImage = await loadImage("assets/chip.jpg");
  // myImage = await loadImage("assets/race.jpg");
  // myImage = await loadImage("assets/nuit.jpg");
  // myImage = await loadImage("assets/hand.jpg");
  
}

function draw() {
  background(0);
  image(myImage, 0, 0);

  loadPixels();

  // choose the effect
  majorityColor();    
  // removeGreenRight();  


  updatePixels();
}

// 1: majority color
// if tied choose R if not choose G else B
function majorityColor() {
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i];
    let g = pixels[i + 1];
    let b = pixels[i + 2];

    let newR = 0;
    let newG = 0;
    let newB = 0;

    // R wins ties
    if (r >= g && r >= b) {
      newR = 255;
    } else if (g >= r && g >= b) {
      newG = 255;
    } else {
      newB = 255;
    }

    pixels[i] = newR;
    pixels[i + 1] = newG;
    pixels[i + 2] = newB;
  }
}


// 2: no green right side
// right half -> g = 0
function removeGreenRight() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (x >= width / 2) {
        let index = (y * width + x) * 4;
        pixels[index + 1] = 0; // set G to 0
      }
    }
  }
}