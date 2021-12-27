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

// Box width
var bw = 400;
// Box height
var bh = 400;
// Padding
var p = 10;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
function drawBoard(){
    for (var x = 0; x <= bw; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "black";
    context.stroke();
}

drawBoard();

//this is a test maze generation
let maze = new Maze(3, 3);
maze.generateMaze();