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