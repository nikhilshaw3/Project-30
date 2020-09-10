class Box {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            density : 0.005,
            friction : 5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        if (this.body.speed < 4) {
            var angle = this.body.angle;
            var pos = this.body.position;
            fill("yellow");
            stroke("red");
            strokeWeight(5)
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
          } else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            
            pop();
          }
    }
}