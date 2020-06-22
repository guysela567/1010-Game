// minimum and maximum amount of cells for each line in the shapes
const minLineAmount = 2;
const maxLineAmount = 3;

const SHAPES = {
    // each shape has an array of vectors, setting the location of each cell in the shape

    "rectangle": () => {
        let arr = [];
        const yAmount = getRandomAmount();
        const xAmount = getRandomAmount();

        for (let y = 0; y < yAmount; y++) {
            for (let x = 0; x < xAmount; x++) {
              arr.push({x, y});
            }
        }
    
        return arr;
    },

    "vertical_line": () => {
        let arr = [];
        const amount = getRandomAmount();

        for (let y = 0; y < amount; y++) {
           arr.push({x: 0, y});
        }

        return arr;
    },

    "horizontal_line": () => {
        let arr = [];
        const amount = getRandomAmount();

        for (let x = 0; x < amount; x++) {
            arr.push({x, y: 0});
        }

        return arr;
    },

    "L": () => {
        let arr = [];
        const xAmount = getRandomAmount();
        const yAmount = getRandomAmount();

        // vertical line
        for (let y = 0; y < yAmount; y++) {
            arr.push({y, x: 0});
        }

        // horizontal line
        for (let x = 1; x < xAmount; x++) {
            arr.push({y: yAmount - 1, x});
        }

        return arr;
    },

    "dot": () => [{x: 0, y: 0}]
}

class Shape {
    constructor(x, y, type, color) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.tiles = SHAPES[type]();
        this.color = color;
        
        this.cells = this.tiles.map(val => new Cell(
            this.x + val.x * (size + cellPadding),
            this.y + val.y * (size + cellPadding),
            this.color
        ));

        this.xOff = 0;
        this.yOff = 0;
        this.dragging = false;
    }

    show() {
        for (let cell of this.cells) {
            cell.show();
        }
    }

    update() {

        if (!this.dragging) {
            if (draggingShape) {
                return;
            }
            for (let cell of this.cells) {
                if (cell.mouseHover() && mouseIsPressed) {
                    this.dragging = true;
                    draggingShape = true;
                    console.log('drag');

                    // set offset
                    this.xOff = mouseX - this.x;
                    this.yOff = mouseY - this.y;
                    console.log(this.xOff, this.yOff);
                    break;
                }
            }
        } else if (!mouseIsPressed) {
            this.dragging = false;
            draggingShape = false;

            // reset offset
            this.xOff = 0;
            this.yOff = 0;
        } else {

            // snap shape to position
            this.x = mouseX - this.xOff;
            this.y = mouseY - this.yOff;
        }

        // constrain position
        this.x = constrain(this.x, 0, width - size);
        this.y = constrain(this.y, 0, height - size);

        // snap cells to shape's position
        for (let i = 0; i < this.cells.length; i++) {
            const cell = this.cells[i];
            cell.x = this.x + this.tiles[i].x * (size + cellPadding);
            cell.y = this.y + this.tiles[i].y * (size + cellPadding);
        }
    }
}



function getRandomAmount() {
    return Math.round(Math.random() * (maxLineAmount - minLineAmount)) + minLineAmount;
}