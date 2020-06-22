// 1010!
let grid = [];
const cols = 10;
const rows = 10;
const VERTICAL_WALL_DIST = 75;//Distance from top canvas boundary and grid's top row
const HORIZONTAL_WALL_DIST = 150;//Distance from horizontal canvas boundaries and grid's vertical edge walls
const size = 40;//The size of each square
const cellPadding = 2;//Distance between each cell to another
const borderY = HORIZONTAL_WALL_DIST * 1.5 + (size + cellPadding) * rows;//Y border between grid and shapes

let shapes = [];
const possibleShapes = Object.keys(SHAPES);//Array containing all possible shape types
let draggingShape = false;

let score = 0; 
let highScore = 0;

function setup() {
  // setting the canvas dimensions and position
  const canvas = createCanvas(
    cols * (size + cellPadding) + 2 * VERTICAL_WALL_DIST,
    rows * (size + cellPadding) + 3 * HORIZONTAL_WALL_DIST
  );  
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);

    
  // creating the grid
  createGrid();

  pickShape();
}

function pickShape(){
  // setting the shapes array
  for (let i = 0; i < 3; i++) {
    shapes.push(new Shape(
      i * width / 3 + 25, 
      borderY + (height - borderY) / 4, 
      random(possibleShapes), 
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
        '#323232'
      );
    }
  }
}

function draw() {
  background('#BCBCB2');

  // draw grid
  drawGrid();
  
  scoreBoard();

  // border line
  fill('#323232');
  rect(0, borderY, width, 10);

  drawShape();
}

function drawShape(){
  // draw shapes
  for (let i = shapes.length - 1; i >= 0; i--) {
    if (shapes[i].toBeRemoved) {
      shapes.splice(i, 1);
    } else {
      shapes[i].update();
      shapes[i].show();
    }
  }
  if(shapes.length == 0){
    pickShape();
  }
}

function drawGrid() {
  // draw every cell in the grid array 
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}

function scoreBoard(){
    textSize(64);
    textAlign(CENTER, CENTER);
    textFont("Comic Sans MS");
    fill('#5AAED4');
    text(score, width/2 - 85, 70);
    fill('#089000');
    text(highScore, width/2 + 85, 70);
}