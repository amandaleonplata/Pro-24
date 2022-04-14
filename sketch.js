const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane;
var rubber1;
var stone1;
var iron1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1= new Rubber(200,500,-40);
    stone1 = new stone(700,550);
    iron1 = new iron(400, 599);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    stone1.display();
    iron1.display();
    
 
}