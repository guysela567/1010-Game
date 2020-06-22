class Cell {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.isEmpty = true;
    }
  
    show() {
      fill(this.color);
      stroke(0);
      rect(this.x, this.y, size, size, 5);
      noStroke();
    }

    mouseHover() {
      return mouseX > this.x - cellPadding / 2 && mouseX < this.x + size + cellPadding / 2
      && mouseY > this.y - cellPadding / 2 && mouseY < this.y + size + cellPadding / 2
    }
  }