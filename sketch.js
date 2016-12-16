var x = 100;
var y = 100;

var R = 255;
var G = 255;
var B = 255;
var A = 255;
function setup() {
  createCanvas(840, 460);
  background(40)
}

function draw() {
  if (keyIsDown(LEFT_ARROW)){
    x-=5;
    R=random(255);
  }

  if (keyIsDown(RIGHT_ARROW)){
    x+=5;
    B=random(255)
    
  }
  if (keyIsDown(UP_ARROW)){
    y-=5;
     G=random(255)
  }
  if (keyIsDown(DOWN_ARROW)){
    y+=5;
    B = random(255);
    G = random(255);
  }
  A = random(255);
  fill(R, G, B, A);
  ellipse(x, y, 50, 50);
}
