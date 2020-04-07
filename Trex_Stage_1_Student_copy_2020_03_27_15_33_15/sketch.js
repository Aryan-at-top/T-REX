var trex,walkingtrex,invi,ground,animation



function preload(){
walkingtrex=loadAnimation("trex1.png","trex3.png","trex4.png")
animation=loadImage("ground2.png")

  

}
function setup() {
  createCanvas(400, 400);
  trex=createSprite(50,385);
  trex.addAnimation("hi",walkingtrex)
  trex.scale=0.5;
  ground=createSprite(200,390);
  ground.addImage("bye",animation)
  ground.velocityX=-8 ;
  invi=createSprite(200,395,400,1)
  invi.visible=false;
  
}

function draw() {
  background(255);
  trex.collide(invi)
      if (ground.x < 0){
    ground.x = ground.width/2;
    }
    if(keyDown("space")){
    trex.velocityY = -15 ;
    }
  trex.velocityY = trex.velocityY + 0.8;
  drawSprites();
}