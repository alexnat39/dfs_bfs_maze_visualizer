import "./App.css";
import DrawingPanel from "./components/maze_ui.js";
import React, { useState } from "react";
import Maze from "./models/maze.js";

function App() {
  const [height, setHeight] = useState(0);
  const [tempHeight, setTempHeight] = useState(10);
  const [width, setWidth] = useState(0);
  const [tempWidth, setTempWidth] = useState(10);
  const [showMaze, setShowMaze] = useState(false);
  const [maze, setMaze] = useState(new Maze(height, width));

  const generateMazeAction = () => {
    if (width != tempWidth || height != tempHeight) {
      setMaze(new Maze(height, width));
      if (!showMaze) setShowMaze(true);
      setHeight(tempHeight);
      setWidth(tempWidth);
    }
  };
  return (
    <div className="App">
      <h1> BFS/DFS Maze Visualizer </h1>
      <div className="inputFields">
        <div>
          <h3>Height</h3>
          <input
            type="number"
            value={tempHeight}
            min="1"
            max="25"
            onChange={(event) => {
              setTempHeight(event.target.value);
            }}
          />
        </div>
        <div>
          <h3>Width</h3>
          <input
            type="number"
            value={tempWidth}
            min="1"
            max="25"
            onChange={(event) => {
              setTempWidth(event.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={generateMazeAction}>Create Maze</button>
        </div>
      </div>
      {showMaze && (
        <DrawingPanel
          width={width > 25 ? 25 : width}
          height={height > 25 ? 25 : height}
        />
      )}
    </div>
  );
}

export default App;
