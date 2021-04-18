
var tom, tom1Img, tom2Img, tom3Img, toms4Img, jerry, jerry1Img, jerry2Img, jerry3Img, jerry4Img, bgImg


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tom1Img = loadAnimation("images/cat1.png");
    tom2Img = loadAnimation("images/cat2.png","images/cat3.png");
    tom3Img = loadAnimation("images/cat4.png");
    jerry1Img = loadAnimation("images/mouse4.png");
    jerry2Img = loadAnimation("images/mouse2.png","images/mouse3.png")
    jerry3Img = loadAnimation("images/mouse1.png");
   


}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  tom = createSprite(700, 640, 5, 5);
  tom.addAnimation("tom",tom1Img);
  tom.scale = 0.2

  jerry = createSprite(300,700,5,5);
  jerry.addAnimation("jerry",jerry1Img);
  jerry.scale = 0.2
  


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide


    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0
        jerry.velocityX = 0
        tom.x = 300
        jerry.x = jerry.x+2

       tom.addAnimation("tomhappy", tom3Img);
       tom.changeAnimation("tomhappy");

        jerry.addAnimation("jerryhappy", jerry3Img);
        jerry.changeAnimation("jerryhappy");
    }

    drawSprites();
}


function keyPressed(){
     if(keyCode === LEFT_ARROW){
          tom.velocityX = -5;
           tom.addAnimation("tomRunning", tom2Img);
            tom.changeAnimation("tomRunning"); 
            jerry.addAnimation("jerryTeasing", jerry2Img); 
            jerry.frameDelay = 25;
             jerry.changeAnimation("jerryTeasing"); 
            }
         }
