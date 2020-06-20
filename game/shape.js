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
    }

    show() {
        for (let cell of this.cells) {
            cell.show();
        }
    }
}



function getRandomAmount() {
    return Math.round(Math.random() * (maxLineAmount - minLineAmount)) + minLineAmount;
}