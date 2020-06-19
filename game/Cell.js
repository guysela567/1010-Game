class Cell {

    constructor(x, y, r, c) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.c = c;
    }
  
    show() {
      fill(this.c);
      noStroke();
      rect(this.x, this.y, this.r, this.r, 5);
    }
  }