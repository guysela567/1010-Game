class Cell {
    constructor(x, y, size, Color) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.Color = Color;
    }
  
    show() {
      fill(this.Color);
      noStroke();
      rect(this.x, this.y, this.size, this.size, 5);
    }
  }