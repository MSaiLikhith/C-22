const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground,ball;
var engine, world;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var ball_options ={
        restitution:2.0
        
    }
    var ground_options ={
        isStatic: true
        
    }
    ball= Bodies.rectangle(200,100,50,50,ball_options);
    World.add(world,ball);

   ground=Bodies.rectangle(200,390,200,20,ground_options);
   World.add(world,ground)

    //console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ball.position.x,ball.position.y,50,50);
    rect(ground.position.x,ground.position.y,200,20);
}
