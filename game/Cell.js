class Cell {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = '#323232';
    }
  
    show() {
      fill(this.color);
      noStroke();
      rect(this.x, this.y, this.size, this.size, 5);
    }
  }