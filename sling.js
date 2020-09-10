class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    Launch(bodyA){
        this.sling.bodyA=bodyA;
    }

    display(){
        image(this.sling1,200,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("white");
            
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
           
            
            pop();
        }
    }
    
}