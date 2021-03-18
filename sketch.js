const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var block1, block8, block9, block10, block11, block12, block13, block14, block15, block16 ;
var ground1, slingShot1 ;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  
  createSprite(400, 200, 50, 50);
  ground1 = new Ground(400,390,800,20);
  block8 = new Block(330,235,30,30);
  block9 = new Block(360,235,30,30);
  block10 = new Block(390,235,30,30);
  block11 = new Block(420,235,30,30);
  block12 = new Block(450,235,30,30);

  block13 = new Block(360,195,30,30);
  block14 = new Block(390,195,30,30);
  block15 = new Block(420,195,30,30);

  block16 = new Block(390,155,30,40);
  ground2 = new Ground(390,245,300,20);

  block1 = new Block(200,200,20,20);
  //slingShot1 = new SlingShot(block1,{x:200 , y:180});
 // block3 = new Hexagon(100,100)

}


function draw() {
  background("grey")
  Engine.update(engine);
  ground1.display();
  block1.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   ground2.display();
  // block3.display();
 // slingShot1.display();
   
  drawSprites();
} 

function mouseDragged()
{
	Matter.Body.setPosition(block1.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	slingShot1.fly();
 
}