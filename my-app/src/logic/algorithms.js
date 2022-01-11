import StaticVariables from '../models/staticVariables';
class Algorithms {
    constructor() {
        this.startCol = 0;
        this.startRow = 0;
        this.endCol = StaticVariables.maze.grid.length - 1;
        this.endRow = StaticVariables.maze.grid[0].length - 1; 
    }

    findStartEnd() {
        for (let i = 0; i < StaticVariables.maze.grid.length; i++) {
            for (let j = 0; j < StaticVariables.maze.grid[0].length; j++) {
                if (StaticVariables.maze.grid[i][j].isStart) {
                    this.startRow = i;
                    this.startCol = j;
                } else if (StaticVariables.maze.grid[i][j].isEnd) {
                    this.endRow = i;
                    this.endCol = j;
                }
            }
        }
    }

    static timeout(ms) { //pass a time in milliseconds to this function
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static bfs()  {
        //this.findStartEnd();
        var dataSctructure = [];
        var startRow = 0;
        var startCol = 0;
        var endRow = StaticVariables.maze.grid.length - 1;
        var endCol = StaticVariables.maze.grid[0].length - 1;

        //this.dataSctructure.push(StaticVariables.maze.grid[this.startRow][this.startCol]);
        dataSctructure.push(StaticVariables.maze.grid[startRow][startCol]);
        var currentPosition = [startRow, startCol];


        while (dataSctructure.length > 0) {
            new Promise(resolve => setTimeout(resolve, 3000));
            let mazeCell = dataSctructure.shift(); 
            StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum].isVisited = true;

            currentPosition[0] = mazeCell.rowPositionNum;
            currentPosition[1] = mazeCell.columnPositionNum;

            //updating the global static variable for the tile we are on right now in the maze
            StaticVariables.rowPositionNum = currentPosition[0];
            StaticVariables.columnPositionNum = currentPosition[1];



            if (currentPosition[0] === endRow && currentPosition[1] === endCol) {
                console.log("reached end");
                return;
            }  
            console.log(`[${currentPosition[0]}][${currentPosition[1]}]`);

            //checking cells in Top-Right-Bottom-Left order
            //checking cell above the current one
            if (mazeCell.rowPositionNum !== 0 && !StaticVariables.maze.grid[mazeCell.rowPositionNum - 1][mazeCell.columnPositionNum].isVisited && !StaticVariables.maze.grid[mazeCell.rowPositionNum - 1][mazeCell.columnPositionNum].isWall) {
                dataSctructure.push(StaticVariables.maze.grid[mazeCell.rowPositionNum - 1][mazeCell.columnPositionNum]);
            }
            //checking cell  to the right of the current one
            if (mazeCell.columnPositionNum !== StaticVariables.maze.grid[0].length - 1 && !StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum + 1].isVisited && !StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum + 1].isWall) {
                dataSctructure.push(StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum + 1]);
            }               
            //checking cell below of the current one
            if (mazeCell.rowPositionNum !== StaticVariables.maze.grid.length - 1 && !StaticVariables.maze.grid[mazeCell.rowPositionNum + 1][mazeCell.columnPositionNum].isVisited && !StaticVariables.maze.grid[mazeCell.rowPositionNum + 1][mazeCell.columnPositionNum].isWall) {
                dataSctructure.push(StaticVariables.maze.grid[mazeCell.rowPositionNum + 1][mazeCell.columnPositionNum]);
            }
            //checking cell to the left of the current one
            if (mazeCell.columnPositionNum !== 0 && !StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum - 1].isVisited &&  !StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum - 1].isWall) {
                dataSctructure.push(StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum - 1]);
            }   
        }
        console.log("we are stuck");
    }
    
    dfs() {
        this.findStartEnd();
        this.dataSctructure.push(StaticVariables.maze.grid[this.startRow][this.startCol]);
        while (this.dataSctructure.length > 0) {
            this.timeout(3000);
            let isNeighborFound = false;
            let mazeCell = this.dataSctructure[this.dataSctructure.length-1];
            StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum].isVisited = true;

            this.currentPosition[0] = mazeCell.rowPositionNum;
            this.currentPosition[1] = mazeCell.columnPositionNum;

            //updating the global static variable for the tile we are on right now in the maze
            StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum].isVisited = true;
            StaticVariables.rowPositionNum = this.currentPosition[0];
            StaticVariables.columnPositionNum = this.currentPosition[1];

            if (this.currentPosition[0] === this.endRow && this.currentPosition[1] === this.endRow) {
                console.log("reached end");
                return;
            }  
            console.log(`[${this.currentPosition[0]}][${this.currentPosition[1]}]`);

            //checking cells in Top-Right-Bottom-Left order
            //checking cell above the current one
            if (mazeCell.rowPositionNum !== 0 && !StaticVariables.maze.grid[mazeCell.rowPositionNum - 1][mazeCell.columnPositionNum].isVisited && !StaticVariables.maze.grid[mazeCell.rowPositionNum - 1][mazeCell.columnPositionNum].isWall) {
                this.dataSctructure.push(StaticVariables.maze.grid[mazeCell.rowPositionNum - 1][mazeCell.columnPositionNum]);
                isNeighborFound = true;
            }
            //checking cell  to the right of the current one
            else if (mazeCell.columnPositionNum !== StaticVariables.maze.grid[0].length - 1 && !StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum + 1].isVisited && !StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum + 1].isWall) {
                this.dataSctructure.push(StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum + 1]);
                isNeighborFound = true;
            }               
            //checking cell below of the current one
            else if (mazeCell.rowPositionNum !== StaticVariables.maze.grid.length - 1 && !StaticVariables.maze.grid[mazeCell.rowPositionNum + 1][mazeCell.columnPositionNum].isVisited && !StaticVariables.maze.grid[mazeCell.rowPositionNum + 1][mazeCell.columnPositionNum].isWall) {
                this.dataSctructure.push(StaticVariables.maze.grid[mazeCell.rowPositionNum + 1][mazeCell.columnPositionNum]);
                isNeighborFound = true;
            }
            //checking cell to the left of the current one
            else if (mazeCell.columnPositionNum !== 0 && !StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum - 1].isVisited &&  !StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum - 1].isWall) {
                this.dataSctructure.push(StaticVariables.maze.grid[mazeCell.rowPositionNum][mazeCell.columnPositionNum - 1]);
                isNeighborFound = true;
            }  
            if (!isNeighborFound) this.dataSctructure.pop(); 
        }
        console.log("we are stuck");
    }

    
    
}


export default Algorithms;


// //this is a test maze generation
// let maze = new Maze(5, 5);
// maze.generateMaze();
// maze.grid[0][0].isStart = true;
// maze.grid[4][4].isEnd = true;
// maze.grid[0][1].isWall = true;
// maze.grid[1][1].isWall = true;
// maze.grid[1][3].isWall = true;
// maze.grid[1][4].isWall = true;
// maze.grid[2][3].isWall = true;
// maze.grid[3][1].isWall = true;
// maze.grid[3][2].isWall = true;

// let algorithms = new Algorithms(maze);
// algorithms.dfs();