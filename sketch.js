const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blower2;
var button;

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;
  
   var options = {
     isStatic: true
   }

  ball = Bodies.circle(width / 2 + 80, height / 2 - 80, 40);
  World.add(world,ball);
  blower = Bodies.rectangle(width / 2 - 50, height / 2 + 50, 150, 20, options);
  World.add(world,blower);
  blower2 = Bodies.rectangle(width / 2 + 70, height / 2 + 20, 100, 90, options);
  World.add(world,blower2);

  button = createImg("push.png");
  button.position(width / 2, height - 100);
  //button.class("blowButton");
  button.size(50,50)
  button.mouseClicked(blow);
}

function draw() {
  background(59);
  Engine.update(engine);

  ellipseMode(RADIUS);
  rectMode(CENTER)

  ellipse(ball.position.x, ball.position.y, 40, 40);
  rect(blower.position.x, blower.position.y, 150, 20);
  rect(blower2.position.x, blower2.position.y, 100, 90);
}

function blow() {
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:-0.005, y:-0.05});
}

