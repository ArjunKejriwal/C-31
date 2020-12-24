var en, w, ob, gr, log1, log2, log3, bgImg;

function preload(){
    bgImg = loadImage("Images/bg.png")
}

function setup (){

 createCanvas(1200, 400);

 en = Matter.Engine.create();

 world = en.world;

 ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);

    angleMode(DEGREES)
    log1 = new Log(810,260,300, 90);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 220);

    log2 =  new Log(810,180,300, 90);

    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,150, 45);
    log4 = new Log(870,120,150, -45);

    bird = new Bird(100,100);


//cLog = new Log(870, 120, 150, -PI/7);

// Constarint objects

sling  = new SlingShot(bird.body,{x:200, y:50});

}

function draw (){

 background(bgImg);

 Matter.Engine.update(en);

 box1.display()

 box2.display();
 box3.display();
 box4.display()
 box5.display()

ground.display();
pig1.display();
pig2.display();
bird.display();
log1.display();
log2.display();
log3.display();
log4.display();
platform.display();
//cLog.display();

sling.display();
}

function mouseDragged () {
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY})
}