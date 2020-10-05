class Box {
  constructor(x, y, width, height) {

    var options = {
      isStatic: false,
      restitution: 0.4,
      friction: 0.6
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    this.visibility = 255;
    World.add(world, this.body);

  } display() {
    if (this.body.speed < 4) {

      stroke("black");
      strokeWeight(3);

      var pos1 = this.body.position;
      rectMode(CENTER);
      rect(pos1.x, pos1.y, this.width, this.height);

    } else {
      World.remove(world, this.body);
      push();

      this.visibility = this.visibility - 5;
      tint(255, this.visibility);

      pop();

    }
  }
  score() {
    if (this.visibility < 0 && this.visibility > -105) {
      score++;
    }
  }
}