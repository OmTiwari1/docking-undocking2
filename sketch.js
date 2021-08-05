var bg, bgImg;
var sleep, brush, gym, eat, bath, move;
var astronaut;

function preload(){
  
  bgImg = loadImage("Images/iss.png");
  sleep = loadAnimation("Images/sleep.png");
  brush = loadAnimation("Images/brush.png");
  gym = loadAnimation("Images/gym1.png", "Images/gym2.png");
  gym1 = loadAnimation("Images/gym11.png", "Images/gym12.png");
  eat = loadAnimation("Images/eat1.png", "Images/eat2.png");
  bath = loadAnimation("Images/bath1.png", "Images/bath2.png");
  move = loadAnimation("Images/move.png", "Images/move1.png");
  
}

function setup() {
  createCanvas(600, 400);
  
  bg = createSprite(300,210,400,20);
  bg.scale = 0.12;
  bg.addImage(bgImg);
  
  astronaut = createSprite(300, 230, 40, 20);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.addAnimation("brushing", brush);
  astronaut.addAnimation("gymming", gym);
  astronaut.addAnimation("gymming", gym1);
  astronaut.addAnimation("eating", eat);
  astronaut.addAnimation("bathing", bath);
  astronaut.addAnimation("moving", move);
  astronaut.scale = 0.09;
  
}

function draw() {
 
  if(keyDown("UP_ARROW")){
    astronaut.changeAnimation("brushing", brush);
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.changeAnimation("gymming", gym);
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }
    
  if(keyDown("g")){
    astronaut.changeAnimation("gymming", gym1);
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }
 
  if(keyDown("h")){
    astronaut.changeAnimation("moving", move);
    }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.changeAnimation("eating");
    astronaut.x = 100;
    astronaut.y = 350;
    }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.changeAnimation("bathing");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }
  
  
 
  if(keyDown("m")){
    astronaut.velocityX = 1;
    astronaut.velocityY = -1;
  }
  
  drawSprites();
  fill ("white")
  text("move with M, arrows to change animation",200,200)
  text("up arrow, down arrow,left arrow, right arrow to veiw the animations",180,230)
   edges = createEdgeSprites();
   astronaut .collide(edges);
}