// Cars Cars Cars
// Eric J
// 11/5/2025

//global variables
let eastbound = []; //cars moving right
let westbound = []; //cars moving left
let trafficLight; //the traffic light object

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < 20; i++){ //create cars for each direction
    let yEast = random(windowHeight/4, windowHeight/4 + 150); //eastbound cars
    eastbound.push(new Vehicle(random(windowWidth), yEast, int(random(0, 2)), random(1, 5)));

    let yWest = random(windowHeight/4 + 250, windowHeight/4 + 350); //westbound cars
    westbound.push(new Vehicle(random(windowWidth), yWest, int(random(0, 2)), random(-1, -5)));
  }

  trafficLight = new TrafficLight(width/2, windowHeight/4 - 80); //create traffic light above the road 
}

function draw() {
  background(220);
  fill( 100, 100, 100);
  drawRoad(); //draw road

  for (let v of eastbound){ //eastbound vehicles
    if (trafficLight.isGreen()){
      v.action(); //move if light is green
    }
    else{
      v.display(); //dont move hen red light
    }
  }
  for (let v of westbound){ //westbound vehicles
    if (trafficLight.isGreen()){ 
      v.action(); //move if light is green
    }
    else{
      v.display(); //dont move hen red light
    }
  }

  trafficLight.display(); //show the traffic light
}

function drawRoad(){ //function to draw road
noStroke();
rect(0, windowHeight/4, windowWidth, 500); //road
for (let x = 0; x < windowWidth; x += 100){ //dashed white line
  fill(255, 255, 255);
  rect(x, windowHeight/2, 70, 10);
  }
}

class Vehicle{
  constructor(x, y, type, xSpeed){
    this.type = type; //0 = car 1 = truck
    this.c = color(random(255), random(255), random(255)); //random color for vehicles
    this.x = x; //horizontal position
    this.y = y; //vertical position
    this.xSpeed = xSpeed; //speed horizontally
  }

  move(){ //move the vehicle and warp around screen edge
    this.x += this.xSpeed;

    if (this.xSpeed > 0){ //cars moving right
      if(this.x > windowWidth){
        this.x = 0;
      }
    }
    else{ //cars moving left
      if(this.x < 0){
        this.x = windowWidth;
      }
    }
  }

  speedUp(){ //speed up slightly
    if(this.xSpeed < 15){
      this.xSpeed += 0.;
    }
  }

  speedDown(){ //slow down slightly but dont stop
    if (this.xSpeed > 0) {
      this.xSpeed -= 0.;
    }
  }
    
  display(){ //show the vehicle based on type
    fill(this.c);
    if (this.type === 0) this.drawCar();
    else this.drawTruck();
  }

  drawCar(){ //shape for car
    fill(0);
    rect(this.x + 5, this.y - 5, 10, 30);
    rect(this.x + 35, this.y - 5, 10, 30);
    fill(this.c);
    rect(this.x, this.y, 50, 20);
  }

  drawTruck(){ //shape for truck
    fill(this.c);
    rect(this.x, this.y, 120, 30);
    fill(255);
    rect(this.x - 30, this.y + 2.5, 30, 25);
  }

  action(){ //each frame for the color
    this.move(); //position change
    this.display(); //show vehicle
  }
}

class TrafficLight{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.state = "green"; //can be green or red
    this.timer = 0; //counts frames for red light
  }

  display(){ //draw traffic light
    fill(80);
    rect(this.x - 5, this.y, 10, 80);

    fill(50);rect(this.x - 20, this.y - 60, 40, 60, 5);

    if (this.state === "green"){ //lights red/green
      fill(0, 255, 0); //green on
      ellipse(this.x, this.y - 30, 20);
      fill(100); //red off
      ellipse(this.x, this.y - 50, 20);
    }
    else{
      fill(255, 0, 0); //red on
      ellipse(this.x, this.y - 50, 20);
      fill(100); //green off
      ellipse(this.x, this.y - 30, 20);
    }

    if (this.state === "red"){ //countdown frames if red
      this.timer--;
      if (this.timer <= 0){
        this.state = "green"; //turne green after 120 frames
      }
    }
  }

  turnRed(){ //turn red for 120 frames
    this.state = "red";
    this.timer = 120;
  }

  isGreen(){ //check if light is green
    return this.state === "green";
  }
}

function keyPressed(){ //space bar to activiate red light
  if (key === ' '){
    trafficLight.turnRed();
  }
}

function mousePressed(){
  if (keyIsDown(SHIFT)){ //add a westbound car when holding shift
    let yWest = random(windowHeight/4 + 250, windowHeight/4 + 350);
    westbound.push(new Vehicle(windowWidth, yWest, int(random(0, 2)), random(-1, -5)));
  }
  else{ //left click to add eastbound car
    yEast = random(windowHeight/4, windowHeight/4 + 150);
    eastbound.push(new Vehicle( 0, yEast, int(random(0,2)), random(1,5)));
  }
}