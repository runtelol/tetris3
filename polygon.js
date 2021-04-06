class Polygon {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.sides = 3
    this.radius = 100;
    this.body = Bodies.polygon(x, y, this.sides,this.radius, options);
    
   
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
   rotate(angle)
    
    fill("#5539cc");
    polygon(0, 0, this.radius,this.sides);
    pop();

    function polygon(x, y, radius, npoints) {
      let angle = TWO_PI / npoints;
      beginShape();
      for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
      }
      endShape(CLOSE);
    }
  }
};