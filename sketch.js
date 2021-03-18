const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle;
var divisions = [];
var particles = [];
var plinkos = [];
var line;

var divisionHeight = 300;

var gameState = "PLAY";

var count = 0;
var score = 0;

function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,20);

    particle = new Particle();
  
  
     for (var k = 0; k <=width; k = k + 80) {
       divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
     }
  
  }

 

function draw() {
    background(0);
    Engine.update(engine);
  
    ground.display();
    particle.display();
   
   //create a new plinko every 90 frames or so
   for (var j = 0; j < particles.length; j++)
   {
      particles[j].display();
   }
   for (var k = 0; j < divisions.length; k++)
   {
      divisions[k].display;
   }
 
 
    obstacles();
  
}

//creating the obstacles function
function obstacles() {
   if(frameCount%300 === 0){
     particle = new Particle(400, 780, 10, 10);
         
     particle.y = y-10;
     obstacle.setLifetime = 100;
   } 
 } 
