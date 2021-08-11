//declare variables
var track
var runner
var trackImg1;
var runnerAni1;
var inviswall1;
var inviswall2;
function preload(){
  //pre-load images
 trackImg1 = loadImage("path.png");
 runnerAni1 = loadAnimation("Runner-1.png","Runner-2.png");


}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite (200,200,400,400);
  track.addAnimation("pave",trackImg1);
  track.scale = 1.3;
  track.velocityY = 5;


  runner = createSprite(400,340,30,50);
  runner.addAnimation("running",runnerAni1);
  runner.scale = 0.075;

  inviswall1 = createSprite(400,200,15,400);
  inviswall1.visible = false;

  inviswall2 = createSprite(0,200,20,400);
  inviswall2.visible = false;




}

function draw() {
  background(0);
  //track repeating
  if(track.y > 400){
    track.y = height/2
  }
 //runner controls
 runner.x = mouseX;

//collide with sides
 runner.collide(inviswall1);
 runner.collide(inviswall2);


 drawSprites();
}
