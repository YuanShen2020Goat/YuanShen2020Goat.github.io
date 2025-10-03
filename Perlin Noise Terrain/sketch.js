// Perlin Noise Project
// Eric Jiang
// 10/2/2025


let rectWidth = 5; // width of rect
let noiseStart = 0; // starting noise
let noiseStep = 0.002  ; // smoothness

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}

function draw() {
  background(220);
  let highest = 0; // tallest
  let highestX = 0; // x position of tallest
  let total = 0; // average
  let count = 0;

  for (let x = 0; x < width; x += rectWidth){ // draw terrain
    let n = noise((x * noiseStep) + noiseStart);
    let h = map(n, 0, 1, 50, height - 20);
    fill(100);
    rect(x, height - h, rectWidth, h);

    if (h > highest){
      highest = h;
      highestX = x;
    }
    total += h;
    count++;
  }
  drawFlag(highestX + rectWidth/2, height - highest); // draw flag on tallest

  let avgHeight = total/count; // avg height line
  stroke(255, 0, 0);
  line(0, height - avgHeight, width, height - avgHeight);

  noiseStart = noiseStart+0.02;
}

function drawFlag(x, y) { // draw flag
  stroke(0);
  line(x, y, x, y - 30);
  fill(255, 0, 0);
  noStroke();
  triangle(x, y - 30, x + 20, y - 20, x, y - 10);
}

function generateTerrain(){ // draw terrain
  draw();
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    rectWidth = max(1, rectWidth - 1);
    generateTerrain();
  } else 
    (keyCode === RIGHT_ARROW);{
      rectWidth += 1;
      generateTerrain();
  }
}