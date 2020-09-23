var hr,min,sec;
var secAngle;

function setup() {
  createCanvas(400,420);

  angleMode(DEGREES);
}

function draw() {
  background(0); 

  
  hr = hour();
 min = minute();
 sec = second();

  fill("white");
  text((hr-12) + ":" + min + ":" + sec,175,400);

  if(hr < 12 && hr >= 0) {
    text("AM",230,400);
  } else{
    text("PM",230,400);
  }
  

  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hourAngle = map(hr % 12,0,12,0,360);

  translate(200,210);
  rotate(-90);
  push();
  rotate(secAngle);
  stroke("red");
  strokeWeight(2);
  line(0,0,100,0); 
  pop();

  push();
  rotate(minAngle);
  stroke("lightBlue");
  strokeWeight(7);
  line(0,0,75,0); 
  pop();

  push();
  rotate(hourAngle);
  stroke("white");
  strokeWeight(7);
  line(0,0,50,0); 
  pop();

  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke("red");
  arc(0,0,300,300,0,secAngle);
  stroke("lightBlue");
  arc(0,0,280,280,0,minAngle);
  stroke("white");
  arc(0,0,260,260,0,hourAngle);




 

  drawSprites();

  
  
}