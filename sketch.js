const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var plinko=[];
var particles=[];
var division=[];
function setup() {
createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(100,795,1800,20);


for (var k=0;k<=width; k=k+80){
  division.push(new Divisions(k,685,10,200))
}

for (var j =40;j<=width; j=j+50){
 plinko.push(new Plinko(j,75,5));
}

for (var j =15;j<=width-10; j=j+50){
  plinko.push(new Plinko(j,175,5));
 }

 for (var j =40;j<=width; j=j+50){
  plinko.push(new Plinko(j,275,5));
 }

 for (var j =15;j<=width-10; j=j+50){
  plinko.push(new Plinko(j,375,5));
 }

  Engine.run(engine);
}

function draw() {
  background("black");  
  ground.display();
 for(var i=0;i<plinko.length;i=i+1){
   plinko[i].display();
 }
 for(var t=0;t<division.length;t=t+1){
  division[t].display();
}
if(frameCount%60===0){
  particles.push(new particle(random(width/2-10,width/2+10),10,10))
}
for(var p=0;p<particles.length;p=p+1){
  particles[p].display();
}
  drawSprites();
}