var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 350, 50, 50);
  fixedRect =  createSprite(400,100,80,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.velocityY = -2;
  fixedRect.velocityY = 2;

}

function draw() {
  background(255,255,255);
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2      
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }  
  //else{
    //movingRect.shapeColor = "green";
    //fixedRect.shapeColor = "green";
//
 // }
 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2      
  && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)
  {
    movingRect.velocityX = movingRect.velocityX*(-1);
    fixedRect.velocityX = fixedRect.velocityX*(-1);

  }
 if( movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY*(-1);
    fixedRect.velocityY = fixedRect.velocityY*(-1);

  }
  drawSprites();
} 