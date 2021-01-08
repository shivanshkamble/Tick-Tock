var hr,mn,sc

function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  
}

function draw() {
  background(0); 
  translate(400,200); 
  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  drawSprites();
}
