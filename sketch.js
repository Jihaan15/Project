
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bob = new Bob(200,200,50,50);
	rod = new Bar(200,100,200,20);
	rope = new Rope (bob.body , rod.body)
  
}


function draw() {
  
  background(0);

  bob.display();
  rod.display();
  rope.display();
  
  drawSprites();
 
}



