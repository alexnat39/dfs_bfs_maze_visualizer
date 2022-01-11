import MazeCell from "./mazeCell.js";

class Maze {
    constructor(rowsNum, columnsNum) {
        this.rowsNum = rowsNum;
        this.columnsNum = columnsNum;
        this.grid = [];
        this.generateMaze();
    }


    generateMaze() {
        console.log(`generating`);
        console.log(`colsNum: ${this.columnsNum}; rowsNum: ${this.rowsNum}`);
        for (let i = 0; i < this.rowsNum; i++) {
            let newRow = [];
            for (let j = 0; j < this.columnsNum; j++) {
                let newMazeCell = new MazeCell(i, j)
                newRow.push(newMazeCell);
            }
            this.grid.push(newRow);
        }
    }
    
    // updateCell(rowNumber, columnNumber) {
    //     maze[rowNumber][columnNumber].isWall = !maze[rowNumber][columnNumber].isWall;
    // }

}
export default Maze;
