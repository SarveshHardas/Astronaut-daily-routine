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
  rk=loadImage("rk.png");
  lk=loadImage("lk.png");
  uk=loadImage("uk.png");
  dk=loadImage("dk.png");
  sk=loadImage("sk.png");
  mk=loadImage("mk.png");
}

function setup() {
  background(0);
  createCanvas(windowWidth,windowHeight);
  
  iss=createSprite(width/2,height/2,10,10);
  iss.addImage(bg);
  iss.scale=0.2;

  lW=createSprite(width/2-500,350,50,height*2);
  lW.visible=false;

  rW=createSprite(width/2+500,350,50,height*2);
  rW.visible=false;

  astronaut=createSprite(width/2,height/2);
  astronaut.addAnimation("sleeping",aS);
  astronaut.addAnimation("brushing",aBr);
  astronaut.addAnimation("gyming",aG);
  astronaut.addAnimation("eating",aE);
  astronaut.addAnimation("bathing",aBa);
  astronaut.addAnimation("flying",fly);
  astronaut.scale=0.1;
  //createSprite(400, 200, 50, 50);

  up =createImg("uK.png") 
  up.position(width-400,height-100)
  up.size(50,50)
  up.mouseClicked(uKF);

  down =createImg("dK.png") 
  down.position(width-400,height-50)
  down.size(50,50)
  down.mouseClicked(dKF);

  left =createImg("lK.png") 
  left.position(width-450,height-50)
  left.size(50,50)
  left.mouseClicked(lKF);

  right =createImg("rK.png") 
  right.position(width-350,height-50)
  right.size(50,50)
  right.mouseClicked(rKF);

  s =createImg("sK.png") 
  s.position(width-500,height-50)
  s.size(50,50)
  s.mouseClicked(sKF);

  m =createImg("mK.png") 
  m.position(width-300,height-50)
  m.size(50,50)
  m.mouseClicked(mKF);
}

function draw() {
  background(255,255,255);  
  edge=createEdgeSprites();
  astronaut.bounceOff(lW);
  astronaut.bounceOff(rW);
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

  if(keyDown("s"))
  {
    astronaut.changeAnimation("sleeping",aS)
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  windowResized();
  drawSprites();
 
 fill("red")
 textSize(15)
 text("Instruction:",25,50);
 textSize(15)
 text("Press up arrow for brushing.",25,65);
 textSize(15)
 text("Press down arrow for gyming.",25,80);
 textSize(15)
 text("Press left arrow for eating.",25,95);
 textSize(15)
 text("Press right arrow for bathing.",25,110);
 textSize(15)
 text("Press m key for moving.",25,125);
 textSize(15)
 text("Press s key for moving.",25,140);
}

function uKF()
{
  astronaut.changeAnimation("brushing",aBr);
  astronaut.velocityY=0;
  astronaut.velocityX=0;
}

function dKF()
{
  astronaut.changeAnimation("gyming",aG);
  astronaut.velocityY=0;
  astronaut.velocityX=0;
}

function lKF()
{
  astronaut.changeAnimation("eating",aE);
  astronaut.velocityY=0;
  astronaut.velocityX=0;
}

function rKF()
{
  astronaut.changeAnimation("bathing",aBa);
  astronaut.velocityY=0;
  astronaut.velocityX=0;
}
function mKF()
{
  astronaut.changeAnimation("flying",fly)
  astronaut.velocityY=2;
  astronaut.velocityX=1;
}
function sKF()
{
  astronaut.changeAnimation("sleeping",aS)
  astronaut.velocityY=0;
  astronaut.velocityX=0;
}
function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}