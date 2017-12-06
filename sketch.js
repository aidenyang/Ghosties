
var ghosts = [];
var attractor;
var PARTICLE_COUNT = 10;

function setup() {
  createCanvas(640, 360);
  spawnGhosts();
  attractor = new Attractor();
}

function draw() {
  background(51);

  for (var i = 0; i < ghosts.length; i++) {
    attractor = new Attractor();
    var force = attractor.calculateAttraction(ghosts[i]);
    ghosts[i].applyForce(force);
    ghosts[i].update();
    ghosts[i].edges();
    ghosts[i].display();
  }
}

function keyPressed() {
  if (key == ' ') {
    spawnGhosts();
  }
}

function spawnGhosts() {
  ghosts = [];
  for (var i = 0; i < PARTICLE_COUNT; i++) {
    ghosts.push(new Ghost(random(1, width - 1), random(1, height - 1), 5));
  }
}
