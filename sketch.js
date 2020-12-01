const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world, engine;

var ground, ground0;
var box1, box2, box3, box4, box5, box6, box7, box8;
var box01, box02, box03, box04, box05, box06;
var box001, box002, box003, box004;
var box0001, box0002;
var boxTop;

var smallbox1, smallbox2, smallbox3, smallbox4;
var smallbox01, smallbox02;
var smallboxTop;

var shooter, rope;

var score = 0;


function setup(){
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,320,400,15);
  ground0 = new Ground(1000,180,300,15);

  box1 = new Box(420,300);
  box2 = new Box(440,300);
  box3 = new Box(460,300);
  box4 = new Box(480,300);
  box5 = new Box(520,300);
  box6 = new Box(540,300);
  box7 = new Box(560,300);
  box8 = new Box(580,300);

  box01 = new Box(440,250);
  box02 = new Box(460,250);
  box03 = new Box(480,250);
  box04 = new Box(520,250);
  box05 = new Box(540,250);
  box06 = new Box(560,250);
  
  box001 = new Box(460,200);
  box002 = new Box(480,200);
  box003 = new Box(520,200);
  box004 = new Box(540,200);

  box0001 = new Box(480,150);
  box0002 = new Box(520,150);

  boxTop = new Box(500, 100);

  smallbox1 = new SmallBox(960,160); 
  smallbox2 = new SmallBox(980,160); 
  smallbox3 = new SmallBox(1020,160);
  smallbox4 = new SmallBox(1040,160);
 
  smallbox01 = new SmallBox(980,110)
  smallbox02 = new SmallBox(1020,110)
 
  smallboxTop = new SmallBox(1000,60) 
  
  shooter = new Shoot(150, 250, 120);

  rope = new Rope(shooter.body, {x:150, y:200});
  
}
function draw(){
  getBackgroundColor();
  Engine.update(engine);

  ground.display();
  ground0.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box01.display();
  box02.display();
  box03.display();
  box04.display();
  box05.display();
  box06.display();

  box001.display();
  box002.display();
  box003.display();
  box004.display();
  
  box0001.display();
  box0002.display();

  boxTop.display();

  smallbox1.display();
  smallbox2.display();
  smallbox3.display();
  smallbox4 .display();
 
  smallbox01.display();
  smallbox02.display();
 
  smallboxTop.display(); 

  shooter.display()

  rope.display();



  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();

  box01.score();
  box02.score();
  box03.score();
  box04.score();
  box05.score();
  box06.score();

  box001.score();
  box002.score();
  box003.score();
  box004.score();
  
  box0001.score();
  box0002.score();

  boxTop.score();

  smallbox1.score();
  smallbox2.score();
  smallbox3.score();
  smallbox4 .score();
 
  smallbox01.score();
  smallbox02.score();
 
  smallboxTop.score(); 

  fill(0);
  text("Score = "+score,740,20);
  textSize(20);
  

}
function mouseDragged(){
  Body.setPosition(shooter.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  rope.fly();
}
function keyPressed(){
  if (keyCode === 32){
    rope.attach(shooter.body);
    Body.setPosition(shooter.body, {x:150, y:250});
  }
}

async function getBackgroundColor(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  
  if(hour>=06 && hour<=18){
      background(color(204, 255, 183));
  }
  else{
    background(color(0, 0, 96));
    
  }

}

