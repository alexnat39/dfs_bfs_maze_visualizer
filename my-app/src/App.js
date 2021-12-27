import './App.css';
import DrawingPanel from "./components/maze_ui.js";



function App() {

  return (
    <div className="App">
    <h1> TITLE </h1>
      <DrawingPanel
          width={200}
          height={200}
          selectedColor={"#12345d"}
        />
    </div>
  );
}

export default App;
