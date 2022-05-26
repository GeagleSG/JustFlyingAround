var airplane, backgroundi, ground, groundImage;

function preload() {
  backgroundi = loadImage("background.png")
  groundImage = loadImage("background.png")
  airplanes = loadImage("airplane.png")
}

function setup() {
  createCanvas(600, 800);
  backgroundi= createSprite(300,200,200,200)
  backgroundi.addImage("background",groundImage)
  airplane= createSprite(300,600,50,50)
  airplane.addImage("airplane",airplanes)
  airplane.scale= 0.2
}

function draw() { 
background(0,0,255)
backgroundi.velocityY= 10
if(backgroundi.y>4320/2){
  backgroundi.y-=4320/4
}
airplane.x= mouseX
if(airplane.x>=500){
  airplane.x=500
}
if(airplane.x<=100){
  airplane.x=100
}
drawSprites();
}