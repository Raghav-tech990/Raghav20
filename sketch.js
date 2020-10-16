const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
  
ground=new Ground(100,500,300,10)
box2=new Box(200,100,50,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
  ground.display(); 
box2.display();
}