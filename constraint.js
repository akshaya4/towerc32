class Constraint{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 5
        }
        this.pointB = pointB;
        this.constraint =Matter.Constraint.create(options);
        World.add(world, this.constraint);
    }
    attach(body) {
        this.constraint.bodyA = body;
    }
    fly(){
        this.constraint.bodyA = null;
    }

    display(){
        if(this.constraint.bodyA){
        var pointA = this.constraint.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(7);
        stroke("red");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}