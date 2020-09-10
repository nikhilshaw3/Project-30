class Polygon {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.5,
            density: 0.2,
            length: 1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
        this.image=loadImage("hexa.png")
    }
    display() {
        var pos = this.body.position;
        var angle = this.angle;
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        fill("lightGreen");
        stroke("yellow");
        strokeWeight(4);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}