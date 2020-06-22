function tryAddToGrid(grid, x, y, shape) {
   if (isShapeFit(grid, x, y, shape)) {
        addShape(grid, x, y, shape);
        return true;
    }
    
    return false;
}

function isShapeFit(grid, x, y, shape) {
    for (let tile of shape.tiles) {
        if(x + tile.x < 0 || x + tile.x >= cols || 
            y + tile.y < 0 || y + tile.y >= rows) {
             return false;
        }
        
        const chosenTile = grid[x + tile.x][y + tile.y];
        if((!chosenTile.isEmpty)){
            return false;
        }
    }
    return true;
}

function addShape(grid, x, y, shape) {
    for (let tile of shape.tiles) {
        const chosenTile = grid[x + tile.x][y + tile.y];
        chosenTile.isEmpty = false;
        chosenTile.color = shape.color;
    }
}


function getFullRows(grid) {
    let canRemove;
    let Ys = [];

    // rows check
    for (let y = 0; y < rows; y++) {
        canRemove = true;

        // check all Xs in the line
        for (let x = 0; x < cols; x++) {
            if (grid[x][y].isEmpty) {
                canRemove = false;
            }
        }

        if (canRemove) {
            Ys.push(y);
        }
    }

    return Ys;
}


function transposeGrid(grid) {
    let arr = [];
    for (let i = 0; i < cols; i++) {
        arr[i] = [];
        for (let j = 0; j < rows; j++) {
            arr[i][j] = grid[j][i];
        }
    }

    return arr;
}


function removeLines(grid) {
    // get Ys
    let Ys = getFullRows(grid);
    grid = transposeGrid(grid);

    // get Xs
    let Xs = getFullRows(grid);
    grid = transposeGrid(grid);

    // remove:

    // columns
    for (let x = 0; x < cols; x++) {
        for (let y of Ys) {
            grid[x][y].isEmpty = true;
            grid[x][y].color = 'black';
        }
    }
    // rows
    for (let y = 0; y < cols; y++) {
        for (let x of Xs) {
            grid[x][y].isEmpty = true;
            grid[x][y].color = 'black';
        }
    }

    score += (Ys.length + Xs.length) * 10;
    highScore = max(score, highScore);
}