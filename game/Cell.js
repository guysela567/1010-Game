class Cell {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.isEmpty = true;
      this.shapeCol;
    }
  
    show() {
      fill(this.color);
      noStroke();
      rect(this.x, this.y, size, size, 5);
    }
  }