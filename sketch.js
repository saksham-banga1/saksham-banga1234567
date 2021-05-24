var snow1;
var snow2;



function preload(){
  snow1 = loadImage("snow2.jpg");
  snow2 = loadImage("snow5.webp")


}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("snow2.jpg");  
  drawSprites();
}