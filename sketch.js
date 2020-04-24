const Engine = Matter.Engine;
const World= Matter.World;
const bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball,box1,box2,box3,box4,box5,box6,ground;
var slingshot;

function setup(){
    var canvas = createCanvas(800,800)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,15,800,30)
    ball = new Box(30,200,40,40);
    box1 = new Box(60,200,40,40);
    box2 = new Box(100,200,40,40);
    box3 = new Box(140,200,40,40);
    box4 = new Box(180,200,40,40);
    box5 = new Box(220,200,40,40);
    box6 = new Box(260,200,40,40);
    slingshot = new SlingShot(ball.body,{
        x: 40,
        y: 40 
    });
}