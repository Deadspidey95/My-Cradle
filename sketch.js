
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(width/2, height/4, width/7, 20);
	ballDiameter = 40
	ball1 = new Ball(width/2 - ballDiameter*2, height/4 + 500, ballDiameter);
	ball2 = new Ball(width/2 - ballDiameter*1, height/4 + 500, ballDiameter);
	ball3 = new Ball(width/2, height/4 + 500, ballDiameter);
	ball4 = new Ball(width/2 + ballDiameter*1, height/4 + 500, ballDiameter);
	ball5 = new Ball(width/2 + ballDiameter*2, height/4 + 500, ballDiameter);

	rope1 = new Rope(ball1.body, roof.body, -ballDiameter*2, 0)
	rope2 = new Rope(ball2.body, roof.body, -ballDiameter*1, 0)
	rope3 = new Rope(ball3.body, roof.body, 0, 0)
	rope4 = new Rope(ball4.body, roof.body, +ballDiameter*1, 0)
	rope5 = new Rope(ball5.body, roof.body, +ballDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
 roof.display();

 ball1.display();
ball2.display(); 
 ball3.display();
 ball4.display();
ball5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
rope5.display();

}
function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-50, y:-45})
	}
}

function drawLine(constraint) {
	ballBodyPosition = constraint.bodyA.position
	roofBodyPosition = constraint.bodyB.position
	roofOffset = constraint.pointB
	roofX = roofBodyPosition.x + roofOffset.x
	roofY = roofBodyPosition.Y + roofOffset.Y
	
	line(ballBodyPosition.x, ballBodyPosition.y, roofX, roofY)
}


