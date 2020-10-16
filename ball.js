class Ball {
    constructor(x, y) {
      var options = {
           isStatic: false,
          'restitution':0.83,
          'friction':0.5,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      stroke("red");
      fill("red");
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  }