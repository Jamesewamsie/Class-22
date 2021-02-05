const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ground, ball, ballHigh;



function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  var g_option= {
    isStatic :true
  }

  var b_option= {
    restitution :1
  }
  
  ground = Bodies.rectangle(200,390,400,30,g_option );
  World.add(world, ground);

  ball = Bodies.circle(200,50,25, b_option);
  World.add(world, ball);
  

  ballHigh = Bodies.circle(190,125, 25, {restitution:0.7});
  World.add(world, ballHigh);

  console.log(ball);
}

function draw() {
  background(0);  

  Engine.update(engine);
  
  fill("aqua")

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 30);


  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 25);

  fill("yellow");
  ellipse(ballHigh.position.x, ballHigh.position.y, 25);
}


