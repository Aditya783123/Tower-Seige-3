

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World
const Constraint = Matter.Constraint
var a;
var engine, world;
var sling;
var circles=[];
var base;
var polygon;
var score;
var stone1, stone2, stone3, stone4, stone5, stone6, stone7, stone8, stone9, stone10;
var stone11, stone12, stone13, stone14, stone15, stone16;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  score = 0;
  stroke(255);
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  polygon = new Polygon(200, 200, 30);
  base = new Ground(500, 400, 300, 30); 
  stone1 = new Stone(405, 350, 30, 50);
  stone2 = new Stone(435, 350, 30, 50);
  stone3 = new Stone(465, 350, 30, 50);
  stone4 = new Stone(495, 350, 30, 50);
  stone5 = new Stone(525, 350, 30, 50);
  stone6 = new Stone(555, 350, 30, 50);
  stone7 = new Stone(585, 350, 30, 50);
  stone8 = new Stone(435, 300, 30, 50);
  stone9 = new Stone(465, 300, 30, 50);
  stone10 = new Stone(495, 300, 30, 50);
  stone11 = new Stone(525, 300, 30, 50);
  stone12 = new Stone(555, 300, 30, 50);
  stone13 = new Stone(465, 250, 30, 50);
  stone14 = new Stone(495, 250, 30, 50);
  stone15 = new Stone(525, 250, 30, 50);
  stone16 = new Stone(495, 200, 30, 50);
  sling = new SlingShot(polygon.body, {x:200, y:200})
  a=height;

  circles.push(width/2);
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  noStroke();
  textSize(35);
  fill("white");
  text("SCORE:" + score, width - 300, 50);
  Engine.update(engine);
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20);
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2);
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
 base.display();
 stone1.display();
 stone2.display();
 stone3.display();
 stone4.display();
 stone5.display();
 stone6.display();
 stone7.display();
 stone8.display();
 stone9.display();
 stone10.display();
 stone11.display();
 stone12.display();
 stone13.display();
 stone14.display();
 stone15.display();
 stone16.display();
 polygon.display();
 sling.display();
}


function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}