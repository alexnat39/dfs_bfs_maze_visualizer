import React, { useState } from "react";
import "../styles/pixel.scss";
import StaticVariables from "/Users/alexnat39/VSCode Projects/dfs_bfs_maze_visualizer/my-app/src/models/staticVariables.js";

export default function Pixel(props) {
  const { columnNum, rowNum } = props;

  const [pixelColor, setPixelColor] = useState("#fff");
 // const [oldColor, setOldColor] = useState(pixelColor);
  //const [canChangeColor, setCanChangeColor] = useState(true);

  function applyColor() {
    if (pixelColor === "#fff") {
      StaticVariables.maze.grid[rowNum][columnNum].isWall = true;
      console.log(StaticVariables.maze.grid[rowNum][columnNum]);
      setPixelColor("#51b3a4");
    } else {
      StaticVariables.maze.grid[rowNum][columnNum].isWall = false;
      console.log(StaticVariables.maze.grid[rowNum][columnNum]);
      setPixelColor("#fff");
    }
    console.log(`column: ${columnNum}\nrow: ${rowNum}`);
  }


  function resetColor() {
    // if (canChangeColor) {
    //   setPixelColor(oldColor);
    // }
    // setCanChangeColor(true);
  }

  return (
    <div
      className="pixel"
      onClick={applyColor}
      onDrag={resetColor}
      onDragEnter={applyColor}
      style={{
        backgroundColor:
          (StaticVariables.currentlyVisitedRow === rowNum &&
          StaticVariables.currentlyVisitedColumn === columnNum)
            ? "#FFFFE0"
            : pixelColor,
        border: "1px solid lightgrey",
      }}
    ></div>
  );
}
