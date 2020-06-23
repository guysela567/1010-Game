class Cell {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.isEmpty = true;
    this.shrinking = false;
    this.prevCol;
    this.round = 5;
    this.onTopSize = size;
    this.animSpeed = 1;
  }

  show() {
    stroke(0);
    // draw the cell regularly
    fill(this.color);
    rect(this.x, this.y, size, size, this.round);
    noStroke();
    // draw shape on top
    if (this.shrinking) {
      noStroke();
      fill(this.prevCol);
      push();
      rectMode(CENTER);
      rect(this.x + size / 2, this.y + size / 2, this.onTopSize, this.onTopSize, this.round);
      pop();
    }
  }

  mouseHover() {
    return mouseX > this.x - cellPadding / 2 && mouseX < this.x + size + cellPadding / 2 &&
      mouseY > this.y - cellPadding / 2 && mouseY < this.y + size + cellPadding / 2
  }

  shrink() {
    // continue only if there's a shape on the cell
    if (this.isEmpty = false) {
      this.shrinking = true;
      this.prevCol = this.color;
      this.color = DEFAULT__GRID_COLOR;

      let interval = setInterval(() => {
        const animGap = 0.35;
        if (this.onTopSize > animGap) {
          this.onTopSize -= animGap;
        } else {
          // end of animation
          this.shrinking = false;
          this.isEmpty = true;
          // reset on top shape size
          this.onTopSize = size;
          clearInterval(interval);
        }
      }, 1);
    }
  }
}