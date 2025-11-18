// Puzzle Game
// Eric
// 11/18/2025



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
  renderGrid(); //draw board
  drawOverlay(); //show overlay

  if(checkWin()){ //check win
    textSize(40);
    fill(0);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2); //show "Win" text center
    noLoop(); //stop game
  }

  print(getCurrentX(),getCurrentY());
}

function mousePressed(){
  let x = getCurrentX();
  let y = getCurrentY();

  if (x < 0 || x >= cols || y < 0 || y >= rows){ //ignore if outsie grid
    return;
  }

  if (keyIsDown(SHIFT)){ //flip only one tile
    flip(x, y);
    return;
  }

  flip(x, y); //flip center first

  if (mode === 'cross'){ //cross pattern
    if (x + 1 < cols) flip(x + 1, y);
    if (x - 1 >= 0) flip(x - 1, y);
    if (y + 1 < rows) flip(x, y + 1);
    if ( y - 1 >= 0) flip(x, y - 1);
  }
  else if (mode === "square"){ //3x3 pattern
    for (let dy = -1; dy <= 1; dy++){
      for (let dx = -1; dx <= 1; dx++){
        let nx = x + dx, ny = y + dy;
        if (nx >= 0 && nx < cols && ny >= 0 && ny < rows){
          flip(nx, ny);
        }
      }
    }
  }
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
      if (fillColor === 255){ //outline on white tiles
        stroke(0);
        strokeWeight(1);
      }
      else {
        noStroke(); //no outline for black tiles
      }
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

function checkWin(){ //check if all tiles match
  let first = grid[0][0];
  for (let r = 0; r < rows; r++){ //loop board
    for (let c = 0; c < cols; c++){
      if (grid[r][c] !== first){ //mismatch not win
        return false;
      }
    }
  }
  return true; //all match = win
}

function drawOverlay(){ //draw overlay on tiles that will flip

  let x = getCurrentX();
  let y = getCurrentY();

  if (x < 0 || x >= cols || y < 0 || y >= rows){ //stop if mouse outside grid
    return;
  }

  fill(0, 255, 255, 100); //color of overlay
  noStroke();

  if (keyIsDown(SHIFT)){ //only one tile
    square( x * squareSize, y * squareSize, squareSize);
    return;
  }

  if (mode === "cross"){ //cross pattern
    highlightTile(x, y);
    highlightTile(x + 1, y);
    highlightTile(x - 1, y);
    highlightTile(x, y + 1);
    highlightTile(x, y - 1);
  }
  else if (mode === "square"){ //3x3 pattern
    for (let dy = -1; dy <= 1; dy ++){
      for (let dx = -1; dx <= 1; dx++){
        highlightTile(x + dx, y + dy);
      }
    }
  }
}

function highlightTile(cx, cy){ //draw overlay tile if inside grid
  if (cx >= 0 && cx < cols && cy >= 0 && cy < rows){
    rect(cx * squareSize, cy * squareSize, squareSize, squareSize);
  }
}

function keyPressed(){ //press space to switch mode
  if (key === ' '){
    if (mode === "cross"){ //toggle cross square
      mode = "square";
    }
    else {
      mode = "cross";
    }
  }
}