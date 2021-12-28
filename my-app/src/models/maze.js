import MazeCell from "./maze_cell.js";

class Maze {
    constructor(rowsNum, columnsNum) {
        this.rowsNum = rowsNum;
        this.columnsNum = columnsNum;
        this.grid = [];
    }


    generateMaze() {
        for (let i = 0; i < this.rowsNum; i++) {
            let newRow = [];
            for (let j = 0; j < this.columnsNum; j++) {
                let newMazeCell = new MazeCell(i, j)
                newRow.push(newMazeCell);
            }
            this.grid.push(newRow);
        }
    }
    
    updateCell(rowNumber, columnNumber) {
        maze[rowNumber][columnNumber].isWall = !maze[rowNumber][columnNumber].isWall;
    }

}
export default Maze;

//this is a test maze generation
let maze = new Maze(3, 3);
maze.generateMaze();