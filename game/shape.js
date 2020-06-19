const SHAPES = {
    "circle": createCircleShape(),
    "vertical_line": createVecticalLineShape(),
    "horizontal_line": createHorizontalLine(),
    "L": createLShape()
}

class Shape {
    constructor(x, y, type, color) {
        this.x = x;
        this.y = y;
        this.tiles = SHAPES[type];
        this.color = color;

        this.cells = this.tiles.map(val => new Cell(
            this.x + val.x * (size + cellPadding),
            this.y + val.y * (size + cellPadding),
            size,
            this.color
            ));
    }

    show() {
        for (let cell of this.cells) {
            cell.show();
        }
    }
}


function createCircleShape() {
    let arr = [];

    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            arr.push({x, y});
        }
    }
    
    return arr;
}

function createVecticalLineShape() {
    let arr = [];

    for (let y = 0; y < 3; y++) {
        arr.push({x: 0, y});
    }

    return arr;
}


function createHorizontalLine() {
    let arr = [];

    for (let x = 0; x < 3; x++) {
        arr.push({x, y: 0});
    }

    return arr;
}


function createLShape() {
    let arr = [];

    for (let y = 0; y < 3; y++) {
        arr.push({y, x: 0});
    }
    for (let x = 1; x <= 2; x++) {
        arr.push({y: 2, x});
    }

    return arr;
}