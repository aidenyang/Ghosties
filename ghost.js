function Ghost(x, y, m) {
  var theta = 0.0;
  var amplitude = random(0.2, 0.3);
  this.pos = createVector(x, y);
  this.mass = m;
  this.acc = createVector(0, 0);

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  this.update = function() {
    theta += random(0.1, 0.2);
    this.vel = createVector(0, sin(theta) * amplitude);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.display = function() {
    fill(255, 200);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
    fill(0);
    stroke(0);
    ellipse(this.pos.x - this.mass/2 - 5, this.pos.y - this.mass/2, this.mass - 10, this.mass - 10);
    ellipse(this.pos.x + this.mass/2 + 5, this.pos.y - this.mass/2, this.mass - 10, this.mass - 10)
  }

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }

    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }

    if (this.pos.x < 0) {
      this.vel.x *= -1;
      this.pos.x = 0;
    }

  }
}