class Cell {
    constructor(x, y, size, c) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.c = c;
    }
  
    show() {
      fill(this.c);
      noStroke();
      rect(this.x, this.y, this.size, this.size, 5);
    }
  }