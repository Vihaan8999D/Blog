// Anna Wasson
// Lab 4: Pong
// 2-10-19

// Random Ball Placement
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = Math.floor(Math.random() * 150) + 90;
var xSpeed = (3, 8);
var ySpeed = (-7, -2);
var score = 0

// Canvas
function setup() {
  createCanvas(1200, 500);
}

//Background

function draw() {

  // Background
  background(9);

  // Paddle
  fill('#ffffff');
  rect(mouseX, 475, 90, 15);

  //Functions
  move();
  display();
  bounce();
  //resetBall();
  paddle();

  //Score
  fill('#d9c3f7');
  textSize(30);
  text("Score: " + score, 10, 25);
}
// Ball Functions
function move() {
  xBall += xSpeed;
  yBall += ySpeed;
}


function bounce() {

  if (xBall < 10 ||
    xBall > 1200 - 10) {
    xSpeed *= -1;
  }
  if (yBall < 10 ||
    yBall > 500 - 10) {
    ySpeed *= -1;
  }
}


// Reset Ball
//function resetBall() {
//  if (yBall >= 400 ||
//    yBall > 400 - 10) {
//    ySpeed = 4;
// }

//}

function display() {
  fill('#d9c3f7');
  ellipse(xBall, yBall, 20, 20);
}

// Bounce off Paddle
function paddle() {
  if ((xBall > mouseX &&
      xBall < mouseX + 90) &&
    (yBall + 10 >= 475)) {
    xSpeed *= -1;
    ySpeed *= -1;
    score++;

  }
}