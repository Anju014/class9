var ball;

function preload() {}

function setup() {
  createCanvas(400, 400);

  ball = createSprite(200, 200, 30, 30);
  ball.shapeColor = "yellow";
}

function draw() {
  background("black");

  if (keyDown("up")) {
    background("lightblue");
  }

  drawSprites();
}
