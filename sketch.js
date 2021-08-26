var sea 
var ship

function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,50,50)
  sea.addImage(seaImg)

  ship = createSprite (200,300, 50,50)
  ship.addAnimation("ship", shipImg1)
  ship.scale = 0.2
}

function draw() {
  background("blue");

  sea.velocityX = -3
  if(sea.x < 0){
    sea.x = 200
  }

 
  drawSprites()
}