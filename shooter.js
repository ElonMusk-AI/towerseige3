class Shoot {
    constructor(x,y,r){
        var option = {
            restitution: 0.5,
            friction: 0,
            density: 1       
         }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/4,option); 
        this.image = loadImage("polygon.png");   
        World.add(world,this.body);
    }
    display(){
        fill(255, 229, 0);
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r, this.r);
        pop();
    }

}