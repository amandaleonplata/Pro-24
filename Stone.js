class stone {
    constructor(x, y) {
      var options = {
       'restitution':0.8,
       'friction': 0.9,
        'density': 12

      };
      this.body = Bodies.rectangle(x, y, 150, 150, options);
      this.width = 150;
      this.height = 150;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('BLACK')
      fill('BLACK')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  