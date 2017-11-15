class Pacman {
  constructor() {
    this.w = px;
    this.col = color(255, 255, 0); // yellow bitch

    this.x = width / 2; // 14 tiles to the right
    this.y = px * 23 + px / 2; // 24 tiles down
    this.posX = floor(this.x / px); // tile x-position
    this.posY = floor(this.y / px); // tile y-position

    this.dir = 2; // 1 - top; 2 - right(initial); 3 - bottom; 4 - left
    this.speed = 2; // movement speed
  }

  show() {
    // Movement
    switch(this.dir) {
      case 1: this.y -= this.speed; break;
      case 2: this.x += this.speed; break;
      case 3: this.y += this.speed; break;
      case 4: this.x -= this.speed; break;
    }

    // Update tile position
    this.posX = floor(this.x / px);
    this.posY = floor(this.y / px);

    // Color
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.w, this.w);
  }
}
