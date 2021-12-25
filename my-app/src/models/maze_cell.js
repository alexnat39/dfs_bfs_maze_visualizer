class MazeCell {
    constructor(rowPositionNum, columnPositionNum) {
        this.rowPositionNum = rowPositionNum;
        this.columnPositionNum = columnPositionNum;
        this.isWall = false;
        this.isVisited = false;
    }
}
export default MazeCell;
