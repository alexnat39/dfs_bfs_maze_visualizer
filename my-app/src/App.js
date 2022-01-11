import "./App.css";
import DrawingPanel from "./components/maze_ui.js";
import React, { useState } from "react";
import StaticVariables from "/Users/alexnat39/VSCode Projects/dfs_bfs_maze_visualizer/my-app/src/models/staticVariables.js";
import Maze from "/Users/alexnat39/VSCode Projects/dfs_bfs_maze_visualizer/my-app/src/models/maze.js";
import Algorithms from "./logic/algorithms";

StaticVariables.maze = new Maze(1,1);

function App() {
  const [height, setHeight] = useState(0);
  const [tempHeight, setTempHeight] = useState(10);
  const [width, setWidth] = useState(0);
  const [tempWidth, setTempWidth] = useState(10);
  const [showMaze, setShowMaze] = useState(false);
  const [mazeSpeedAnimation, setMazeSpeedAnimation] = useState(1);


  const generateMazeAction = () => {
    if (width !== tempWidth || height !== tempHeight) {
      if (!showMaze) setShowMaze(true);
      setHeight(tempHeight);
      setWidth(tempWidth);
      StaticVariables.maze = new Maze(tempHeight, tempWidth);
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
      {showMaze && (
        <input 
          type="number"
          value={mazeSpeedAnimation}
            min="1"
            max="5"
            onChange={(event) => {
              setMazeSpeedAnimation(event.target.value);
            }}
          > 
        </input>
      )}
      {showMaze && (
        <button onClick={Algorithms.bfs}>Run BFS</button>
      )}
    </div>

  );
}

export default App;
