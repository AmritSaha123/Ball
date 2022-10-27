var ball 
function setup() {
  createCanvas(400,400);
  ball=createSprite(100,100,100,100);
  edges=createEdgeSprites();
  ball.velocityX=3;
  ball.velocityY=3;
}

function draw() 
{
  background(30);
ball.bounceOff(edges)
drawSprites();
}





