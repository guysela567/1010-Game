function tryAddToGrid(grid, x, y, shape) {
    if (isShapeFit(grid, x, y, shape)) {
        AddShape(grid, x, y, shape);
    }
}

function isShapeFit(grid, x, y, shape) {
    for(let tile of shape.tiles){
        const chosenTile = grid[x + tile.x][y + tile.y];
        if(!chosenTile.isEmpty){
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