var cat1, cat2, cat3, cat4;
var catImg1, catImg2, catImg3;

var mouse1, mouse2, mouse3, mouse4;
var mouseImg1, mouseImg2, mouseImg3;

var garden, gardenImg;



function preload() {

  gardenImg = loadImage("images/garden.png");
  catImg1 = loadImage("images/cat1.png");
  catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
  catImg3 = loadImage("images/cat4.png");
  mouseImg1 = loadImage("images/mouse1.png");
  mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
  mouseImg3 = loadImage("images/mouse4.png");


}

function setup(){
  createCanvas(1000,800);

  //create tom and jerry sprites here
  cat = createSprite(800, 650, 20, 20);
  cat.addAnimation("catSitting", catImg1);
  cat.scale = 0.20;

  mouse = createSprite(100, 650, 40, 40);
  mouse.addAnimation("mouseStanding", mouseImg1);
  mouse.scale = 0.20;

}

function draw() {

  //Write condition here to evalute if tom and jerry collide
 background(gardenImg);

 
 mouse.debug = true;



 if (cat.x - mouse.x < (cat.width - mouse.width)/2) 
 {

    cat.velocityX = 0;
    cat.addAnimation("catHappy", catImg3);
    cat.changeAnimation("catHappy");

    mouse.addAnimation("mouseHappy", mouseImg3);
    mouse.changeAnimation("mouseHappy");
   
 }


  drawSprites();
}


function keyPressed(){

//For moving and changing animation write code here

   if (keyCode === LEFT_ARROW) {  

     mouse.addAnimation("mouseTeasing", mouseImg2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay = 25;

     cat.addAnimation("catComing", catImg2);
     cat.changeAnimation("catComing");
     cat.velocityX = -2;
     
   }


}