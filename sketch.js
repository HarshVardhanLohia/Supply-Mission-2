var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var edge1, edge2, bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	edge1 = createSprite(250,390,20,100);
	edge2 = createSprite(450,390,20,100);
	bottom = createSprite(350,430,200,20);
	
   
	edge1.shapeColor = color(180,0,0);
	edge2.shapeColor = color(180,0,0);
	bottom.shapeColor = color(180,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	bottom = Bodies.rectangle(350,430,200,20, {isStatic:true});
   World.add(world,bottom);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rectMode(CENTER);
  rect(bottom.position.x,bottom.position.y,200,20);
  drawSprites();
  
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	
  }
}




