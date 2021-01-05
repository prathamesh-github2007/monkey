
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("mm",monkey_running)
  monkey.scale =0.2
  ground=createSprite(300,350,600,10)
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
}


function draw() {
background("white")
  monkey.collide(ground)
  ground.velocityX=-3
  
  if(ground.x<300){
  ground.x=300 
 }
  if(keyDown("space")){
  monkey.velocityY=-12
    
  }
  monkey.velocityY=monkey.velocityY+1 
  spawnobsta()
  if(obstaclesGroup.isTouching(monkey)){
  ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0); 
    obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    }
  score=score+1
  spawnfood()
  drawSprites()
  text("score"+score,300,100 )
}
function spawnobsta(){
  if(frameCount%300===0){

  obstacle=createSprite(550,300,10,50)
  obstacle.addImage("obs",obstacleImage)
  obstacle.scale=0.3
  obstacle.velocityX=-3
  obstacle.lifetime =300 
  obstaclesGroup.add(obstacle);
  } 
}

function spawnfood(){
  if(frameCount%300===0){
  banana=createSprite(550,120,10,50)
  banana.addImage("bi",bananaImage)
  banana.scale=0.1   
  banana.velocityX=-3
  banana.lifetime =300 
  FoodGroup.add(banana);
  } 
}



