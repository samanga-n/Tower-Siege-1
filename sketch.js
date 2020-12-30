const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

function preload(){
 polygon = loadImage("polygon.png");
}

function setup() {
    createCanvas(1500,600);
    engine=Engine.create();
    world=engine.world;
     
    ground1= new Ground(570,570,300,15);
    ground2= new Ground(1100,300,300,15);
   
    ball = Bodies.circle(172,321,20);
    World.add(world,ball);
    throwObject = new Throw(this.ball,{x:168, y:321});
    block7= new Block(660,550,30,40);
    block6= new Block(630,550,30,40);
    block5= new Block(600,550,30,40);
    block4= new Block(570,550,30,40);
    block3= new Block(540,550,30,40);
    block2= new Block(510,550,30,40);
    block1= new Block(480,550,30,40);

    block1a= new Block(510,504,30,40);  //670,590
    block1b= new Block(540,504,30,40);
    block1c= new Block(570,504,30,40);
    block1d= new Block(600,504,30,40);
    block1e= new Block(630,504,30,40);
   
    block11a= new Block(540,464,30,40);
    block11b= new Block(570,459,30,40);
    block11c= new Block(600,464,30,40);

    block111a= new Block(570,430,30,40);

    blocka= new Block(1040,272,30,40);
    blockb= new Block(1070,272,30,40);
    blockc= new Block(1100,272,30,40);
    blockd= new Block(1130,272,30,40);
    blocke= new Block(1160,272,30,40);

    blocka1= new Block(1070,232,30,40);
    blockb1= new Block(1100,232,30,40);
    blockc1= new Block(1130,232,30,40);

    blocka2= new Block(1100,192,30,40);
    // blockb2= new Block(1130,192,30,40);
    
    
}

function draw() {
    background(0,0,0);  
    Engine.update(engine);
    imageMode(CENTER);
    image(polygon,ball.position.x,ball.position.y,40,40);
    
    // mouseDragged();
    // mouseReleased();
    push();
    textSize(15);
    fill('white');
    stroke('orange');
    strokeWeight(1);
    text("Drag the hexagon and Release it",150,90);
    pop();

    fill("white");
    text(mouseX+","+mouseY,mouseX,mouseY);
    ground1.display();
    ground2.display();

    throwObject.display();
    
    fill(70, 187, 226)
    block7.display();
    block6.display();
    block5.display();
    block4.display();
    block3.display();
    block2.display();
    block1.display();
    blocka.display();
    blockb.display();
    blockc.display();
    blockd.display();
    blocke.display();
    fill(234, 75, 162);
    block1a.display();
    block1b.display();
    block1c.display();
    block1d.display();
    block1e.display();
    blocka1.display();
    blockb1.display();
    blockc1.display();
    fill(242, 194, 99);
    block11a.display();
    block11b.display();
    block11c.display();
    blocka2.display();
    // blockb2.display();
    // blockc2.display();
    fill(204, 175, 175);
    block111a.display();

}  
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
function mouseReleased(){
    throwObject.fly();
  }
