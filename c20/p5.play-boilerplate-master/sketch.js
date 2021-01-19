var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 80);
  fixedrect.shapeColor="pink";
  movingrect=createSprite(600, 200, 50, 50);
  movingrect.shapeColor="pink";
  
  fixedrect.velocityX=1;
  movingrect.velocityX=-1;


}

function draw() {
  background(0);  

  //movingrect.x=World.mouseX;
 // movingrect.y=World.mouseY;


 if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 
  && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2) {
     movingrect.velocityX = movingrect.velocityX * (-1);
     fixedrect.velocityX = fixedrect.velocityX * (-1); 
  }
   if (movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 
    && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
       movingrect.velocityY = movingrect.velocityY * (-1);
        fixedrect.velocityY = fixedrect.velocityY * (-1); 
      }



  drawSprites();

}