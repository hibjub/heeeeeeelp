
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var cont1,cont2,cont3;

var ground;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground (400,650,800,100);

	cont1 = new Container (700,600,100,20);
	cont2 = new Container (650,570,10,60);
	cont3 = new Container (750,570,10,60);

	ball = new Ball (150,560,30);
}


function draw() {
  background(0);
  
  Engine.update(engine);

  cont1.display();
  cont2.display();
  cont3.display();

  ball.display();

  ground.display();
 

  KeyPressed();
}


function KeyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:12,y:-2});
 }
}



