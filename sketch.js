var hours, minutes, seconds;
var hoursAngle, minutesAngle, secondsAngle;

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);


}

function draw() {
  background(0,0,0); 
//Translation and Rotation
  translate(400, 200);
  rotate(-90);

  //calculating time w/ predifined function from p5
  hours = hour();
  minutes = minute();
  seconds = second();

  hoursAngle = map(hours%12, 0, 12, 0, 360);
  push()
  stroke(250, 0, 0);
  strokeWeight(10);
  rotate(hoursAngle);
  line(0, 0, 50, 0);
  pop()
  
  minutesAngle = map(minutes, 0, 60, 0, 360)
  push();
  stroke(0, 0, 250);
  strokeWeight(7);
  rotate(minutesAngle);
  line(0, 0, 75, 0);
  pop();
  push();
  secondsAngle = map(seconds, 0, 60, 0, 360)
  stroke(0, 255, 0);
  strokeWeight(5);
  rotate(secondsAngle);
  line(0, 0, 100, 0);
  pop();

  //drawing the arcs
  strokeWeight(15);
  noFill();
  //arc of hour
  stroke(255, 0, 0);
  arc(0, 0, 250, 250, 0, hoursAngle);
  //arc of hour
  stroke(0, 0, 255);
  arc(0, 0, 280, 280, 0, minutesAngle);
  //arc of hour
  stroke(0, 255, 0);
  arc(0, 0, 310, 310, 0, secondsAngle);
  
  drawSprites();
}

