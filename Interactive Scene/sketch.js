// Interactive Scene
// Eric J
// 9/19/2025


let currentBack = 0 //set currentBack to 0

function setup(){
  //setting up the size and variables
  createCanvas(windowWidth,windowHeight);
  x = 300;
  y = 300;
  c = color(200,0,0);
}

function draw(){
  //background changes based on currentBack
  if (currentBack==0){
    background(135,206,235) //blue sky
  } else if (currentBack==1){
    background(255,204,153) //sunraise
  } else if (currentBack==2){
    background(100,149,237) //afternoon
  } else {
    background(25,25,112) //night
  }
  //mountains
  fill(255, 255, 255);
  ellipse(1000,height-150,2500,750);
  fill(153, 153, 153);
  ellipse(250,height-30,2500,700);
  //green ground
  fill(38, 153, 0);
  rect(0, height-70, width, 80);
  //sun
  fill(255, 163, 26);
  ellipse(120,100,200,200);
  //moving character
  fill(c);
  ellipse(x,y,35,45);
  rect(x-30,y,60,80);
  movement()
  //artist mark
  fill(0,0,0);
  textSize(30);
  text("Eric J",1830,950);
  stroke(0,0,0);
  strokeWeight(3);
}

function movement(){
  //keyboard inputs that controls character
  if(keyIsDown(LEFT_ARROW)) x -= 10;
  if(keyIsDown(RIGHT_ARROW)) x += 10;
  if(keyIsDown(UP_ARROW)) y -= 10;
  if(keyIsDown(DOWN_ARROW)) y += 10;
}

function keyPressed(){
  //reset position
  if (key=='r'){
    x = width/2;
    y = height/2;
  }
}

function mousePressed(){
  //change character color randomly
  if (mouseButton==LEFT){
    c = color(random(255),random(255),random(255))
  }
  //cycle background
  if (mouseButton==CENTER){
    currentBack=(currentBack + 1);
    if (currentBack >= 4){
      currentBack = 0;
    }
  }
}
