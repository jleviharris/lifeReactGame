import logo from "./logo.svg";
import "./App.css";
import ButtonBoard from "./Components/ButtonBoard";
import BoardContainer from "./Components/BoardContainer";
import GenerationCounter from "./Components/GenerationCounter";
import { useState } from "react";

function App() {
  const numRows = 50;
  const numCols = 50;
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });
  return (
    <div className="App">
      <ButtonBoard
        grid={grid}
        setGrid={setGrid}
        numRows={numRows}
        numCols={numCols}
      />
      <BoardContainer
        grid={grid}
        setGrid={setGrid}
        numRows={numRows}
        numCols={numCols}
      />
      <GenerationCounter />
    </div>
  );
}

export default App;
