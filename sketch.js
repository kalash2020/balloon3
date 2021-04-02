

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background1;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var redB,pinkB,greenB,blueB,arrowGroup;

var Score = 0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() 
 {
  createCanvas(500,500 );
   
  
  //creating background
  background1 = createSprite(0,0,600,600);
  background1.addImage(backgroundImage);
  background1.scale = 2.5
  
 
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  redB = new Group();
  blueB = new Group();
  greenB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();
 
}

function draw()
{

 background1.velocityX = -3 

    if (background1.x < 0){
      background1.x = background1.width/2;
    }
  
  
   if (keyDown("space")) 
  {
    createArrow();
  }
   var selectBalloon=Math.round(random(1,4));
  

  if(frameCount%60===0)
    {
      if(selectBalloon===1)
        {
          redBalloon();
        }
      else
        if(selectBalloon===2)
          {
            greenBalloon();
          }
      else
        if(selectBalloon===3)
          {
            blueBalloon();
          }
      else
      if(selectBalloon===4)
        {
          pinkBalloon();
        }
    }
  
  if(arrowGroup.isTouching(blueB))
    {
      blueB.destroyEach();
      arrowGroup.destroyEach();
      Score=Score+1;
      console.log = "hello"
    }
  
  if(redB.isTouching(arrowGroup))
    {
      redB.destroyEach();
      arrowGroup.destroyEach();
      Score=Score+1;
      console.log = "hello"
    }
  
  if(pinkB.isTouching(arrowGroup))
    {
      pinkB.destroyEach();
      arrowGroup.destroyEach();
      Score=Score+1;
      console.log = "hello"
    }
  
  if(greenB.isTouching(arrowGroup))
    {
      greenB.destroyEach();
      arrowGroup.destroyEach();
      Score=Score+1;
      console.log = "hello"
    }
   
 
  bow.y = World.mouseY
  
   
 
  
 
  
  
  drawSprites();
  text ("Score:"+Score,410,10);
  
}


function createArrow()
{
  arrow= createSprite(360, 100, 5, 10);
  arrow.addImage(arrowImage);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.y=bow.y;
  arrow.lifetime=100;
  arrowGroup.add(arrow);
  
}

function redBalloon()
{
  red_balloon = createSprite(50, 50, 1, 1);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1;
  red_balloon.velocityX= 4;
  red_balloon.lifetime=100;
  redB.add(red_balloon);
}

function greenBalloon()
{
  green_balloon = createSprite(100, 150, 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
  green_balloon.velocityX= 4;
  green_balloon.lifetime=100;
  greenB.add(green_balloon);
}

function blueBalloon()
{
  blue_balloon = createSprite(100, 300, 10, 10);
  blue_balloon.addImage(green_balloonImage);
  blue_balloon.scale = 0.1;
  blue_balloon.velocityX= 4;
  blue_balloon.lifetime=100;
  blueB.add(blue_balloon);
}


function pinkBalloon()
{
  pink_balloon = createSprite(100, 400, 10, 10);
  pink_balloon.addImage(green_balloonImage);
  pink_balloon.scale = 0.1;
  pink_balloon.velocityX= 4;
  pink_balloon.lifetime=100;
  pinkB.add(pink_balloon);
}
