var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(1000,190, 50, 80);
  fixedRect.shapeColor = "black";
  fixedRect.debug = true;
  movingRect = createSprite(35, 190,50,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  movingRect.velocityX = random(80,200);
  
}

function draw() {
  background("white");  

  

 if( movingRect.isTouching(fixedRect)){
   
   movingRect.velocityX = 0;
 } 

 

if(movingRect.velocityX < 80){
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

if(movingRect.velocityX <= 81){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

}

if(movingRect.velocityX > 180){
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";

}


 
  drawSprites();
}


