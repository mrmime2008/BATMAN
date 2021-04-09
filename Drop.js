class Drop{
    constructor(x,y) {
        var options = {
            restitution: 0.1,
            friction: 0.001
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;

        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,470)});
        }
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill("blue");
        // translate(pos.x,pos.y);
        // rotate(angle);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}