const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box17,box18,box19,box20,box21;
var SlingShot;
var Poly;
var Ground1,Ground2,Ground3;

function setup(){
var canvas = createCanvas(1365,829);

engine = Engine.create();
world = engine.world;

Ground1 = new Ground(750, 800, 1500, 20);
Ground2 = new Ground(1100,300,250,20);
Ground3 = new Ground(750,550,300,20);

box1 = new Box(640,510,50,50);
box2 = new Box(695,510,50,50);
box3 = new Box(750,510,50,50);
box4 = new Box(805,510,50,50);
box5 = new Box(860,510,50,50);
box6 = new Box(830,460,50,50);
box7 = new Box(775,460,50,50);
box8 = new Box(720,460,50,50);
box9 = new Box(665,460,50,50);
box10 = new Box(695,405,50,50);
box11 = new Box(750,405,50,50);
box12 = new Box(805,405,50,50)
box13 = new Box(775,350,50,50);
box14 = new Box(720,350,50,50);
box15 = new Box(750,295,50,50);

box16 = new Box(1035,250,50,50);
box17 = new Box(1090,250,50,50);
box18 = new Box(1145,250,50,50);
box19 = new Box(1065,200,50,50);
box20 = new Box(1120,200,50,50);
box21 = new Box(1090,150,50,50);

poly = new Polygon(500,400,90);

sling = new Sling(poly.body, { x: 200, y: 250 })

}

function draw(){
background(0);

Engine.update(engine);

textSize(35);
  fill("white");
  text("DRAG THE STONE TOWARD THE BLOCK",50,100)

box1.display();
box2.display();
box3.display();
box5.display();
box4.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
sling.display();
poly.display();
Ground1.display();
Ground2.display();
Ground3.display();
}

function mouseDragged() {
    Matter.Body.setPosition(poly.body, { x: mouseX, y: mouseY })
  }
  
  
  function mouseReleased() {
    sling.fly();
  }

  function keyPressed(){
    if(keyCode===32){
    Matter.Body.setPosition(poly.body,{x:500,y:40});
    sling.Launch(poly.body);
    }
    }