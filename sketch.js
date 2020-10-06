
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() 
 {
   createCanvas(400, 355);
   //monkey
   monkey = createSprite(80, 315, 20, 20);
   monkey.addAnimation("moving", monkey_running);
   monkey.scale = 0.1;
   
   //ground
   ground = createSprite(400, 350, 900, 10);
   ground.velocityX = -3;
   ground.x = ground.width/2;
   console.log(ground.x);
   
   FoodGroup = new Group();
   ObstacleGroup = new Group();
  
 }


function draw() 
 {
    background("lightblue");
  
   //survival time
   stroke("black");
   textSize(20);
   fill("white");
   survivalTime = Math.round(frameCount/frameRate())
   text("Survival Time: " + survivalTime, 100, 50);
   
   //ground part II
   ground.velocityX = -3;
   
   if(ground.x < 0)
     {
       ground.x = ground.width/2;
     }
   
   //MONKEY
   if(keyDown("space") && monkey.y >= 314)
     {
       monkey.velocityY = -18;
     }
   
     monkey.velocityY = monkey.velocityY + 0.8;
     monkey.collide(ground);
   
     console.log(monkey.y);
   
   spawnRocks();
   spawnBanana();
   drawSprites();
 }

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(50,320));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}

  function spawnRocks() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var rocks = createSprite(400,330,40,10);
    rocks.addImage(obstacleImage);
    rocks.scale = 0.1;
    rocks.velocityX = -3;
    
     //assign lifetime to the variable
    rocks.lifetime = 200;
    
    
    //add each cloud to the group
    ObstacleGroup.add(rocks);
  }
}
