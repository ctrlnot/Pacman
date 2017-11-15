class Wall {
  constructor(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.col = color(17, 31, 204); // dark blue color
  }

  show() {
    noStroke();
    fill(this.col);
    rect(this.x * px, this.y * px, px, px);
  }
}
