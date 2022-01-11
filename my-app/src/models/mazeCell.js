class MazeCell {
    constructor(rowPositionNum, columnPositionNum) {
        this.rowPositionNum = rowPositionNum;
        this.columnPositionNum = columnPositionNum;
        this.isWall = false;
        this.isVisited = false;
        this.isStart = false;
        this.isEnd = false;
    }
}
export default MazeCell;
