class Cell {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
    }
  
    show() {
      fill(this.color);
      noStroke();
      rect(this.x, this.y, size, size, 5);
    }

    mouseHover() {
      return mouseX > this.x && mouseX < this.x + this.size
      && mouseY > this.y && mouseY < this.y + this.size
    }
  }