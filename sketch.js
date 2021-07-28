const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;

var roof;
varrope1;
var rope2;
var rope3;
var rope4;
var bob1;
var bob2;
var bob3;
var bob4;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var rope1_options={
	
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
     World.add(world,rope)
	Engine.run(engine);
	
  applyForce(body,position,force)
  ellipseMode(radius)
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
display(rope1)
display(rope2)
display(rope3)
display(rope4)
displaybob(rope5)
  display()
  {
	  var pointA=this.rope.bodyA.position;
	  var pointB+this.rope.bodyB.position;
	  push ()
	  strokeWeight(2)
	  stroke ("green")
	  var pointA=this.rope.bodyA.position;
	  var pointB+this.rope.bodyB.position;
	  pop()
	  

  }
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
applyForce(body,position,force)