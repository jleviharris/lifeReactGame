import "./App.css";
import ButtonBoard from "./Components/ButtonBoard";
import BoardContainer from "./Components/BoardContainer";
import GenerationCounter from "./Components/GenerationCounter";
import { useState, useCallback, useRef } from "react";
import produce from "immer";
import checkNeighbors from "./Components/CheckNeighborsFunction";

function App() {
  let numCols;
  let numRows;
  let neighbors = 0;

  if (window.innerWidth > 600) {
    numRows = 50;
    numCols = 50;
  }
  if (window.innerWidth <= 600) {
    numRows = 12;
    numCols = 12;
  }

  const [generation, setGeneration] = useState(1);
  const [speed, setSpeed] = useState(100);
  const [running, setRunning] = useState(false);
  const genRef = useRef(generation);
  const speedRef = useRef(speed);
  const runningRef = useRef(running);
  speedRef.current = speed;
  genRef.current = generation;
  runningRef.current = running;

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });

  const runApp = useCallback(() => {
    let newGen = genRef.current + 1;
    setGeneration(newGen);
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows - 1; i++) {
          for (let k = 0; k < numCols - 1; k++) {
            //check for neighbors
            neighbors = checkNeighbors(numRows, numCols, g, i, k);
            // apply game rules and save new board values
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runApp, speedRef.current);
  }, []);

  return (
    <div className="App">
      <ButtonBoard
        grid={grid}
        setGrid={setGrid}
        numRows={numRows}
        numCols={numCols}
        running={running}
        setRunning={setRunning}
        runningRef={runningRef}
        runApp={runApp}
        speed={speed}
        setSpeed={setSpeed}
        setGeneration={setGeneration}
      />
      <BoardContainer
        grid={grid}
        setGrid={setGrid}
        numRows={numRows}
        numCols={numCols}
      />
      <GenerationCounter
        generation={generation}
        setGrid={setGrid}
        numRows={numRows}
        numCols={numCols}
        genRef={genRef}
      />
    </div>
  );
}

export default App;
