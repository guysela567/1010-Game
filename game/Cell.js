class Cell {
    constructor(x, y, size, color) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
    }
  
    show() {
      fill(this.color);
      noStroke();
      rect(this.x, this.y, this.size, this.size, 5);
    }
  }