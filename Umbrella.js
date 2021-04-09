class Umbrella{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,60,options);
        this.radius = 60
        this.image = loadImage("Walking Frame/walking_1.png");


        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image,0,0,160,160);
        pop();
    }
}