// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid = [
  [0,     0,   0,  255,   0],
  [255,   0, 255,    0, 255],
  [255, 255,   0,  255, 255],
  [0,   255,   0,    0,   0]
];

let rows = grid.length;
let cols = grid[0].length;

let squareSize = 60;

let mode = "cross";

function setup() {
  createCanvas(cols*squareSize, rows*squareSize);
  randomizeGrid(); //random starting arrangement
}

function draw() {
  background(220);
  renderGrid();
  drawOverlay();

  if(checkWin()){
    textSize(40);
    fill(0);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
    noLoop();
  }

  print(getCurrentX(),getCurrentY());
}

function mousePressed(){
  //flip current tile
  //upgrade: only do this if the mouse is on Canvas
  
  let x = getCurrentX();
  let y = getCurrentY();

  //ALWAYS: flip the "focused" tile
  flip(x,y);

  //IF THEY EXIST:
  //flip our NSEW neighbours (cross pattern)
  if(x+1 < cols) flip(x+1,y);
  if(y-1 >= 0) flip(x, y-1);

}

function getCurrentX(){
  //determine current col of mouse position
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / squareSize);
}

function getCurrentY(){
  //determine current row of mouse position
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / squareSize);
}


function flip(x,y){
  //takes a tile @ x,y and inverts its value
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function renderGrid(){
  // interpret the information in the 2D array, and draw
  // a grid of square on the screen to reflect it.
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize,y*squareSize,squareSize);
    }
  }
}

function randomizeGrid(){ //loop trough each tile and give random color
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      grid[y][x] = random([0, 255]); //only 0/255 as random color
    }
  }
}

function checkWin(){
  let first = grid[0][0];
  for (let r = 0; r < rows; r++){
    for (let c = 0; c < cols; c++){
      if (grid[r][c] !== first){
        return false;
      }
    }
  }
  return true;
}

function drawOverlay(){
  let x = getCurrentX();
  let y = getCurrentY();

  
}