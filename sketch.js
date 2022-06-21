var bg
var s1,s1img
var s2,s2img



function preload(){
  bg = loadImage("snow2.jpg");
  s1img = loadImage("snow4.webp")
 
}


function setup() {
  createCanvas(1000,600);
 s1 =  createSprite(400, 200, 50, 50);
 s1.addImage(s1img);
  
}

function draw() {
  background(bg);  
  drawSprites();
}