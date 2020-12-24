class SlingShot{

constructor(a,b){

    var options  = {

        bodyA : a,
        pointB : b,
        stiffness: 0.04,
        length:10

    }
    this.sling = Matter.Constraint.create(options) ;
    Matter.World.add(world, this.sling);
this.sling1 = loadImage("Images/sling1.png")
this.sling2 = loadImage("Images/sling2.png")
this.sling3 = loadImage("Images/sling3.png")

}

display(){

  var pointA  = this.sling.bodyA.position;
  var pointB  = this.sling.pointB;

image(this.sling1, 200, 20)  
image(this.sling2, 170, 20)

if(pointA.x <220){
  stroke(84,39,15)
strokeWeight(4);
  line(pointA.x-20 , pointA.y , pointB.x-10 , pointB.y)
  line(pointA.x-20 , pointA.y , pointB.x+30 , pointB.y-3)
  image(this.sling3,pointA.x-25,pointA.y-10,15,30)
}
else{
  stroke(84,39,15)
  strokeWeight(4);
  line(pointA.x-20 , pointA.y , pointB.x-10 , pointB.y)
  line(pointA.x-20 , pointA.y , pointB.x+30 , pointB.y-3)
  image(this.sling3,pointA.x+25,pointA.y-10,15,30)



}
}
}