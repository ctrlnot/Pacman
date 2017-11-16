class Pacman {
  constructor() {
    this.w = px; // width

    this.x = width / 2;         // 14 tiles to the right
    this.y = px * 23 + px / 2;  // 24 tiles down

    this.dir = RIGHT;     // initial
    this.speed = 2;       // movement speed
    this.nextDir = undefined; // next direction (right as default)

    this.collided = false;
    this.boundery = px / 2; // collision mask

    this.col = color(255, 255, 0); // yellow bitch
  }

  show() {
    // Look of pacman
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.w, this.w);
    // fill(color(255, 0, 0));
    // line(this.x, this.y, this.)
  }

  move() {
    // Movement
    if(!this.checkIfCollides(this.nextDir) && this.nextDir) {
      this.dir = this.nextDir;
    }

    if(!this.checkIfCollides(this.dir)) {
      switch(this.dir) {
        case UP:    this.y -= this.speed; break;
        case RIGHT: this.x += this.speed; break;
        case DOWN:  this.y += this.speed; break;
        case LEFT:  this.x -= this.speed; break;
      }
    }
  }

  getBoundery(dir) {
    return dir === UP || dir === LEFT ? -this.boundery : this.boundery;
  }

  checkIfCollides(dir) {
    switch(dir) {
      case UP:
      case DOWN:
        for(let i = 0; i < walls.length; i++) {
          let thisWall = walls[i];
          if(this.x === thisWall.x && this.y + this.getBoundery(dir) === thisWall.y + thisWall.getBoundery(dir)) {
            return true;
          }
        }
        return false;
      break;

      case LEFT:
      case RIGHT:
        for(let i = 0; i < walls.length; i++) {
          let thisWall = walls[i];
          if(this.x + this.getBoundery(dir) === thisWall.x + thisWall.getBoundery(dir) && this.y === thisWall.y) {
            return true;
          }
        }
        return false;
      break;
    }
  }

  run() {
    this.show(); // Render pacman
    this.move(); // Move pacman
  }
}
