// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

tiles = [];
let level = [
  [0, 1, 0, 3, 0],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

let playerX = 3; let playerY = 4;
let rows = level.length;
let cols = level[0].length;
let tile_size = 100;

function setup() {
  createCanvas(tile_size*cols, tile_size*rows);
  loadAssets();
  level[playerY][playerX] = 2;
}

async function loadAssets(){
  for(let i = 0; i < 4; i++){
    tiles.push(await loadImage("assests/"+i+".png"));
  }
}

function draw() {
  renderBoard();
}

function swap(x1, y1, x2, y2){
  let temp = level[y1][x1];
  level[y1][x1] = level [y2][x2];
  level[y2][x2] = temp;
}

function renderBoard(){
  for(let x = 0; x < cols; x++){
    for(let y = 0; y < rows; y++){
      let imgIndex = level[y][x];
      let currentImage = tiles[imgIndex];
      image(currentImage, x*tile_size, y*tile_size);
    }
  }
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    if(playerX > 0){
      if(level[playerY][playerX-1] === 0){
        swap(playerX, playerY, playerX - 1, playerY);
      playerX--;
      }
      else if(level[playerY][playerX-1] === 1){
        if(playerX > 1 && level[playerY][playerX - 2] === 0){
          swap(playerX - 1, playerY, playerX - 2, playerY);
          swap(playerX, playerY, playerX - 1, playerY);
          playerX--;
        }       
      }
    }
  }
  if(keyCode === RIGHT_ARROW){
    swap(playerX, playerY, playerX + 1, playerY);
    playerX++;
  }
  if(keyCode === UP_ARROW){
    swap(playerX, playerY, playerX, playerY - 1);
    playerY--;
  }
  if(keyCode === DOWN_ARROW){
    swap(playerX, playerY, playerX, playerY + 1);
    playerY++;
  }
}