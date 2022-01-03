import Maze from '/Users/alexnat39/VSCode Projects/dfs_bfs_maze_visualizer/my-app/src/models/maze.js'
class Algorithms {
    constructor(maze) {
        this.maze = maze;
        this.dataSctructure = [];
        this.startCol = 0;
        this.startRow = 0;
        this.endCol = 0;
        this.endRow = 0; 
        this.currentPosition = [this.startRow, this.startCol];
    }

    #findStartEnd() {
        for (let i = 0; i < this.maze.grid.length; i++) {
            for (let j = 0; j < this.maze.grid[0].length; j++) {
                if (this.maze.grid[i][j].isStart) {
                    this.startRow = i;
                    this.startCol = j;
                } else if (this.maze.grid[i][j].isEnd) {
                    this.endRow = i;
                    this.endCol = j;
                }
            }
        }
    }

    bfs()  {
        this.#findStartEnd();
        this.dataSctructure.push(maze.grid[this.startRow][this.startCol]);
        while (this.dataSctructure.length > 0) {
            let mazeCell = this.dataSctructure.shift(); 
            this.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum].isVisited = true;
            this.currentPosition[0] = mazeCell.rowPositionNum;
            this.currentPosition[1] = mazeCell.columnPositionNum;
            if (this.currentPosition[0] == this.endRow && this.currentPosition[1] == this.endRow) {
                console.log("reached end");
                return;
            }  
            console.log(`[${this.currentPosition[0]}][${this.currentPosition[1]}]`);

            //checking cells in Top-Right-Bottom-Left order
            //checking cell above the current one
            if (mazeCell.rowPositionNum != 0 && !this.maze.grid[mazeCell.rowPositionNum - 1][mazeCell.columnPositionNum].isVisited && !this.maze.grid[mazeCell.rowPositionNum - 1][mazeCell.columnPositionNum].isWall) {
                this.dataSctructure.push(maze.grid[mazeCell.rowPositionNum - 1][mazeCell.columnPositionNum]);
            }
            //checking cell  to the right of the current one
            if (mazeCell.columnPositionNum != this.maze.grid[0].length - 1 && !this.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum + 1].isVisited && !this.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum + 1].isWall) {
                this.dataSctructure.push(maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum + 1]);
            }               
            //checking cell below of the current one
            if (mazeCell.rowPositionNum != this.maze.grid.length - 1 && !this.maze.grid[mazeCell.rowPositionNum + 1][mazeCell.columnPositionNum].isVisited && !this.maze.grid[mazeCell.rowPositionNum + 1][mazeCell.columnPositionNum].isWall) {
                this.dataSctructure.push(maze.grid[mazeCell.rowPositionNum + 1][mazeCell.columnPositionNum]);
            }
            //checking cell to the left of the current one
            if (mazeCell.columnPositionNum != 0 && !this.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum - 1].isVisited &&  !this.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum - 1].isWall) {
                this.dataSctructure.push(maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum - 1]);
            }   
        }
        console.log("we are stuck");
    }
    
    dfs() {
        this.#findStartEnd();
        this.dataSctructure.push(maze.grid[this.startRow][this.startCol]);
        while (this.dataSctructure.length > 0) {
            let isNeighborFound = false;
            let mazeCell = this.dataSctructure[this.dataSctructure.length-1];
            this.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum].isVisited = true;
            this.currentPosition[0] = mazeCell.rowPositionNum;
            this.currentPosition[1] = mazeCell.columnPositionNum;
            if (this.currentPosition[0] == this.endRow && this.currentPosition[1] == this.endRow) {
                console.log("reached end");
                return;
            }  
            console.log(`[${this.currentPosition[0]}][${this.currentPosition[1]}]`);

            //checking cells in Top-Right-Bottom-Left order
            //checking cell above the current one
            if (mazeCell.rowPositionNum != 0 && !this.maze.grid[mazeCell.rowPositionNum - 1][mazeCell.columnPositionNum].isVisited && !this.maze.grid[mazeCell.rowPositionNum - 1][mazeCell.columnPositionNum].isWall) {
                this.dataSctructure.push(maze.grid[mazeCell.rowPositionNum - 1][mazeCell.columnPositionNum]);
                isNeighborFound = true;
            }
            //checking cell  to the right of the current one
            else if (mazeCell.columnPositionNum != this.maze.grid[0].length - 1 && !this.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum + 1].isVisited && !this.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum + 1].isWall) {
                this.dataSctructure.push(maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum + 1]);
                isNeighborFound = true;
            }               
            //checking cell below of the current one
            else if (mazeCell.rowPositionNum != this.maze.grid.length - 1 && !this.maze.grid[mazeCell.rowPositionNum + 1][mazeCell.columnPositionNum].isVisited && !this.maze.grid[mazeCell.rowPositionNum + 1][mazeCell.columnPositionNum].isWall) {
                this.dataSctructure.push(maze.grid[mazeCell.rowPositionNum + 1][mazeCell.columnPositionNum]);
                isNeighborFound = true;
            }
            //checking cell to the left of the current one
            else if (mazeCell.columnPositionNum != 0 && !this.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum - 1].isVisited &&  !this.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum - 1].isWall) {
                this.dataSctructure.push(maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum - 1]);
                isNeighborFound = true;
            }  
            if (!isNeighborFound) this.dataSctructure.pop(); 
        }
        console.log("we are stuck");
    }
}

//export default Algorithms;


//this is a test maze generation
let maze = new Maze(5, 5);
maze.generateMaze();
maze.grid[0][0].isStart = true;
maze.grid[4][4].isEnd = true;
maze.grid[0][1].isWall = true;
maze.grid[1][1].isWall = true;
maze.grid[1][3].isWall = true;
maze.grid[1][4].isWall = true;
maze.grid[2][3].isWall = true;
maze.grid[3][1].isWall = true;
maze.grid[3][2].isWall = true;

let algorithms = new Algorithms(maze);
algorithms.dfs();