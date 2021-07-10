var iss;

function preload()
{
  bg=loadImage("iss.png");
  aS=loadAnimation("sleep.png");
  aBr=loadAnimation("brush.png");
  aG=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  aE=loadAnimation("eat1.png","eat2.png","drink1.png","drink2.png");
  aBa=loadAnimation("bath1.png","bath2.png");
  fly=loadImage("move.png","move1.png");
}

function setup() {
  background(0);
  createCanvas(800,400);
  
  iss=createSprite(400,200,10,10);
  iss.addImage(bg);
  iss.scale=0.2;

  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",aS);
  astronaut.addAnimation("brushing",aBr);
  astronaut.addAnimation("gyming",aG);
  astronaut.addAnimation("eating",aE);
  astronaut.addAnimation("bathing",aBa);
  astronaut.addAnimation("flying",fly);
  astronaut.scale=0.1;
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  edge=createEdgeSprites();
  astronaut.bounceOff(edge[0]);
  astronaut.bounceOff(edge[1]);
  astronaut.bounceOff(edge[2]);
  astronaut.bounceOff(edge[3]);

  if(keyDown("DOWN_ARROW"))
  {
    astronaut.changeAnimation("gyming",aG);
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if(keyDown("UP_ARROW"))
  {
    astronaut.changeAnimation("brushing",aBr);
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if(keyDown("LEFT_ARROW"))
  {
    astronaut.changeAnimation("eating",aE);
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if(keyDown("RIGHT_ARROW"))
  {
    astronaut.changeAnimation("bathing",aBa);
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if(keyDown("m"))
  {
    astronaut.changeAnimation("flying",fly)
    astronaut.velocityY=2;
    astronaut.velocityX=1;
  }

  drawSprites();
 textSize(15)
 text("Instruction:",25,50);
 textSize(15)
 text("Up arrow = brushing",25,65);
 textSize(15)
 text("Down arrow = gyming",25,80);
 textSize(15)
 text("Left arrow = eating",25,95);
 textSize(15)
 text("Right arrow = bathing",25,110);
 textSize(15)
 text("M key = moving",25,125);
}