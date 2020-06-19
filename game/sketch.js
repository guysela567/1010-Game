//1010!
let grid = [];
const cols = 10;
const rows = 10;
const dwv = 75;//Distance from vertical wall 
const dwh = 150;//Distance from horizontal wall
const size = 40;//The size of each square
 
function setup() {
  const canvas = createCanvas(cols * size + 2 * dwv, rows * size + 3 * dwh);  
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
  createGrid();
}

function createGrid() {
  //create grid
  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i * size + dwv, j * size + dwh, 38, '#323232');
    }
  }
}

function draw() {
  background('#BCBCB2');
  drawGrid();
}

function drawGrid() {
  //draw evry index in the array 
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
  fill('#323232');
  rect(0, 650, width, 10);
}