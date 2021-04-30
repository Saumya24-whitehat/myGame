const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;

var playerL,playerR;

var brick1;

var truckImg;

var ground;

function preload(){
  truckImg=loadImage("truck.png");
}

function setup() {
  createCanvas(800,700);

  engine=Engine.create();
  world=engine.world;
  options={
    isStatic:true
  };
  
  playerL=Bodies.rectangle(300,200,50,50,options);
  World.add(world,playerL);

  playerR=Bodies.rectangle(600,200,50,50,options);
  World.add(world,playerR);

  ground=Bodies.rectangle(400,660,800,80,options);
  World.add(world,ground);

  brick1=new Bricks();
  // console.log(brick1);
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  rectMode(CENTER);
  rect(playerL.position.x,playerL.position.y,50,50);

  rectMode(CENTER);
  rect(playerR.position.x,playerR.position.y,50,50);

  if(keyIsDown(UP_ARROW)&&playerL.position.y-25>0){
    playerL.position.y-=10;
  }else if(keyIsDown(DOWN_ARROW)&&playerL.position.y+25<620){
    playerL.position.y+=10;
  }
  if(keyIsDown(87)&&playerR.position.y-25>0){
    playerR.position.y-=10;
  }else if(keyIsDown(83)&&playerR.position.y+25<620){
    playerR.position.y+=10;
  }
  
  brick1.move();
  brick1.display();

  image(truckImg, 125, 75, 100, 75);

  strokeWeight(5);
  line(340,100,560,100);
  line(340,200,560,200);
  line(340,300,560,300);
  line(340,400,560,400);
  line(340,500,560,500);
  line(340,600,560,600);

  fill("brown");
  noStroke();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,80);
  // if(keyCode===24){
  //   playerR.position.y-=10;
  //   keyCode=87;
  // }else if(keyCode===24){
  //   playerR.position.y+=10;
  //   keyCode=83;
  // }
}