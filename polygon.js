

     class Polygon{
        constructor(x, y, r){
            var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.5
            };
            this.body = Bodies.circle(x, y, r, options);
            this.r = r
            this.image = loadImage("polygon.png");
            World.add(world, this.body);
        }
        display(){
         var pos = this.body.position;  
         var angle = this.body.angle;
         push();
         translate(pos.x, pos.y);
         rotate(angle);
         imageMode(CENTER);
         fill("blue");    
         ellipse(0, 0, this.r, this.r);
         pop();
        }
    }
    