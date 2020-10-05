const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground01, ground1, ground2;
var ball;
var constraint;
var box1, box2, box3, box4, box5, box6;
var box7, box8, box9, box10, box11, box12;
var box13, box14, box15, box16, box17, box18;
var box19, box20, box21, box22, box23, box24, box25, box26;
var polygon_img;
var polygon , slingshot ;
var backgroundImg;
var gameState = "play";

var bg = "1.jpg";

var score = 0;

function preload() {
  polygon_img = loadImage("polygon.png");
  getBack();
}

function setup() {
  createCanvas(1500, 700);

  engine = Engine.create();
  world = engine.world;
   Engine.run(engine);
  ground01 = new Ground
  ground1 = new Ground(775, 600, 400, 50);
  ground2 = new Ground(1175, 300, 400, 50);

  /*var options = {
    restitution: 1
  }
  ball = Bodies.circle(200, 400, 20, options);
  World.add(world, ball);

  constraint = new Constraint(this.ball, { x: 200, y: 400 });*/

  //first layer
  box1 = new Box(700, 550, 40, 50);
  box2 = new Box(730, 550, 40, 50);
  box3 = new Box(760, 550, 40, 50);
  box4 = new Box(790, 550, 40, 50);
  box5 = new Box(820, 550, 40, 50);
  box6 = new Box(850, 550, 40, 50);

  //second layer
  box7 = new Box(730, 500, 40, 50);
  box8 = new Box(760, 500, 40, 50);
  box9 = new Box(790, 500, 40, 50);
  box10 = new Box(820, 500, 40, 50);

  //third layer
  box11 = new Box(750, 450, 40, 50);
  box12 = new Box(800, 450, 40, 50);

  //fourth layer
  box13 = new Box(775, 400, 40, 50);

  //first layer
  box14 = new Box(1100, 250, 40, 50);
  box15 = new Box(1130, 250, 40, 50);
  box16 = new Box(1160, 250, 40, 50);
  box17 = new Box(1190, 250, 40, 50);
  box18 = new Box(1220, 250, 40, 50);
  box19 = new Box(1250, 250, 40, 50);

  //second layer
  box20 = new Box(1130, 200, 40, 50);
  box21 = new Box(1160, 200, 40, 50);
  box22 = new Box(1190, 200, 40, 50);
  box23 = new Box(1220, 200, 40, 50);

  //third layer
  box24 = new Box(1200, 150, 40, 50);
  box25 = new Box(1150, 150, 40, 50);

  //fourth layer
  box26 = new Box(1175, 100, 40, 50);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  //slingShot = new Slingshot(this.polygon,{x:100,y:200});

}


function draw() {
  
  if (backgroundImg) {
    background(backgroundImg);
  }

  rectMode(CENTER);

  ground01.display();
  ground1.display();
  ground2.display();

  constraint.display();

  fill("yellow");

  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();

  fill("lightgreen");

  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();

  fill("white");

  box11.display();
  box11.score();
  box12.display();
  box12.score();

  fill("green");

  box13.display();
  box13.score();

  fill("lightgreen");

  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();

  fill("yellow");

  box20.display();
  box20.score();
  box21.display();
  box21.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();

  fill("orange");

  box24.display();
  box24.score();
  box25.display();
  box25.score();

  fill("red");

  box26.display();
  box26.score();

  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  drawSprites();

  textSize(30);
  fill("lightgreen");
  text("Destroy the Pyramids!! Drag the polygon and release it, Press space to play again!", 25, 150);
  
  fill("yellow");
  text("Score:" + score, 50, 50);

}
function mouseDragged() {
  //if (gameState !== "end") {
    Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
 // }
}
function mouseReleased() {
  constraint.fly();
  gameState = "end";
}
function keyPressed() {
  if (keyCode === 32) {
    //Set the ball's position near the sling
    //And attach it to the sling
    Matter.Body.setPosition(this.ball, { x: 200, y: 400 });
    constraint.attach(this.ball);
    gameState = "play";
  }
}
async function getBack() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();
  var dateTime = responseJson.datetime;
  var hour = dateTime.slice(11, 13);
  if (hour >= 06 && hour <= 14) {
    bg = "1.jpg";
  } else {
    bg = "2.jpg";
  }
  backgroundImg = loadImage(bg);

}
