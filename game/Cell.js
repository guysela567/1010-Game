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

    mouseHover() {
      return mouseX > this.x && mouseX < this.x + size
      && mouseY > this.y && mouseY < this.y + size
    }
  }