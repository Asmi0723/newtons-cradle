
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var roof1;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new roof(width/2,height/4,width/7,20);

	bobDiameter = 40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	pendulum1 = new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	pendulum2 = new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	pendulum3 = new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	pendulum4 = new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	pendulum5 = new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);

	rope1 = new rope(pendulum1.body, roof1.body, -bobDiameter*2, 0);
	rope2 = new rope(pendulum2.body, roof1.body, -bobDiameter*1, 0);
	rope3 = new rope(pendulum3.body, roof1.body, 0, 0);
	rope4 = new rope(pendulum4.body, roof1.body, -bobDiameter*1, 0);
	rope5 = new rope(pendulum5.body, roof1.body, -bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}