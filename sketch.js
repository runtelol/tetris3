const Engine=Matter.Engine;
const Bodies=Matter.Bodies
const World=Matter.World
var engine, world, ground;
var box, log;
var circle
var polygon
function setup() {
  createCanvas(400,800);
  engine=Engine.create()
  world=engine.world
  ground=new Ground(200,780,400,20)
  box=new Box(200,300)
  log=new Log(123,123,100,PI/-1111 );
  circle=new Circle(100,100)
  polygon=new Polygon(200,200)
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  ground.display();
  box.display();
  log.display();
  circle.display();
  polygon.display();
}