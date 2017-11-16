class Wall {
  constructor(x, y, id) {
    this.w = px; // width

    this.x = (x + 0.5) * px; // added 0.5 to adjust from rectmode center!
    this.y = (y + 0.5) * px; // added 0.5 to adjust from rectmode center!
    
    this.boundery = px / 2; // collision mask

    this.col = color(17, 31, 204); // dark blue color
  }

  getBoundery(dir) {
    // The return is opposite of the pacman
    return dir === 2 || dir === 3 ? -this.boundery : this.boundery;
  }

  show() {
    noStroke();
    fill(this.col);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.w);
  }
}
