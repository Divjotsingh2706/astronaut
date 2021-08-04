var bg,sleep, brush, gym, eat, bath, move;
var astronaut;

function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym1.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png","images/eat1.png","images/eat2.png","images/eat1.png","images/eat2.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
 move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png");
}

function setup() {
  createCanvas(600, 500);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  astronaut.y=350;
  astronaut.debug=false
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("BLACK")
  text("INSTRUCTION :",20, 35);

  fill("WHITE ")
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("space key = Moving",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    b
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyWentDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x=200;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyWentDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    
    astronaut.x = 150;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyWentDown("SPACE")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}