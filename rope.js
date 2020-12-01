class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stifness:0.5,
            length:50
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        this.bodyA = bodyA
        World.add(world,this.rope);
    }
    fly(){
        this.rope.bodyA = null;
    }
    attach(body){
        this.rope.bodyA = body;
    }
    display(){
        if (this.rope.bodyA){
        var posA = this.rope.bodyA.position;
        var posB = this.pointB;
        push();
        strokeWeight(5);
        line(posA.x, posA.y, posB.x, posB.y);
        pop();
        }
    }
}