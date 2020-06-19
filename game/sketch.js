// 1010!
let grid = [];
const cols = 10;
const rows = 10;
const VERTICAL_WALL_DIST = 75;//Distance from vertical wall 
const HORIZONTAL_WALL_DIST = 150;//Distance from horizontal wall
const size = 40;//The size of each square
const cellPadding = 2;//Distance between every cell
const borderY = HORIZONTAL_WALL_DIST * 1.5 + size * rows;//Y border between grid and shapes

let shapes = [];
 
function setup() {
  const canvas = createCanvas(cols * size + 2 * VERTICAL_WALL_DIST, rows * size + 3 * HORIZONTAL_WALL_DIST);  
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
  createGrid();

  for (let i = 0; i < 3; i++) {
    shapes.push(new Shape(
      i * width / 3 + 25, 
      borderY + (height - borderY) / 4, 
      random(Object.keys(SHAPES)), 
      color(255, 0, 0)
      ));
  }
}

function createGrid() {
  // create grid
  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(
        i * size + VERTICAL_WALL_DIST + i * cellPadding, 
        j * size + HORIZONTAL_WALL_DIST + j * cellPadding, 
        size, 
        '#323232');
    }
  }
}

function draw() {
  background('#BCBCB2');
  drawGrid();
}

function drawGrid() {
  // draw every index in the array 
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
  fill('#323232');

  // border line
  rect(0, borderY, width, 10);

  for (let shape of shapes) {
    shape.show();
  }
}