import logo from "./logo.svg";
import "./App.css";
import ButtonBoard from "./Components/ButtonBoard";
import BoardContainer from "./Components/BoardContainer";
import GenerationCounter from "./Components/GenerationCounter";
import { useState, useCallback, useRef, useEffect } from "react";
import produce from "immer";

function App() {
  let numCols;
  let numRows;

  if (window.innerWidth > 600) {
    numRows = 50;
    numCols = 50;
  }
  if (window.innerWidth <= 600) {
    numRows = 12;
    numCols = 12;
  }

  let neighbors;
  let gridCopy;

  const [generation, setGeneration] = useState(1);
  const genRef = useRef(generation);
  genRef.current = generation;
  const [speed, setSpeed] = useState(100);
  const speedRef = useRef(speed);
  speedRef.current = speed;

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });

  function checkNeighbors(g, i, k) {
    // check for top left corner
    if (i === 0 && k === 0) {
      neighbors =
        g[numRows - 1][numCols - 1] +
        g[numRows - 1][k] +
        g[numRows - 1][k + 1] +
        g[i][numCols - 1] +
        g[i][k + 1] +
        g[i + 1][numCols - 1] +
        g[i + 1][k] +
        g[i + 1][k + 1];
      // check for top border and wrap to bottom
    } else if ((i === 0) & (k > 0 || k < numCols - 1)) {
      neighbors =
        g[numRows - 1][k - 1] +
        g[numRows - 1][k] +
        g[numRows - 1][k + 1] +
        g[i][k - 1] +
        g[i][k + 1] +
        g[i + 1][k - 1] +
        g[i + 1][k] +
        g[i + 1][k + 1];
      // check for top right corner
    } else if (i === 0 && k === numCols - 1) {
      neighbors =
        g[numRows - 1][k - 1] +
        g[numRows - 1][k] +
        g[numRows - 1][0] +
        g[i][k - 1] +
        g[i][0] +
        g[i + 1][k - 1] +
        g[i + 1][k] +
        g[i + 1][0];
      // check for left border and wrap to right side
    } else if (i > 0 && i < numRows - 1 && k === 0) {
      neighbors =
        g[i - 1][numCols - 1] +
        g[i - 1][k] +
        g[i - 1][k + 1] +
        g[i][numCols - 1] +
        g[i][k + 1] +
        g[i + 1][numCols - 1] +
        g[i + 1][k] +
        g[i + 1][k + 1];
      // check for all indexs not on a border
    } else if (i > 0 && i < numRows - 1 && k > 0 && k < numCols - 1) {
      neighbors =
        g[i - 1][k - 1] +
        g[i - 1][k] +
        g[i - 1][k + 1] +
        g[i][k - 1] +
        g[i][k + 1] +
        g[i + 1][k - 1] +
        g[i + 1][k] +
        g[i + 1][k + 1];
      // check for right border and wrap to left border
    } else if (i > 0 && i < numRows - 1 && k === numCols - 1) {
      neighbors =
        g[i - 1][k - 1] +
        g[i - 1][k] +
        g[i - 1][0] +
        g[i][k - 1] +
        g[i][0] +
        g[i + 1][k - 1] +
        g[i + 1][k] +
        g[i + 1][0];
      // check for bottom left corner
    } else if (i === numRows - 1 && k === 0) {
      neighbors =
        g[i - 1][numCols - 1] +
        g[i - 1][k] +
        g[i - 1][k + 1] +
        g[i][numCols - 1] +
        g[i][k + 1] +
        g[0][numCols - 1] +
        g[0][k] +
        g[0][k + 1];
      // check for bottom border and wrap to top
    } else if (i === numRows - 1 && k > 0 && k < numCols - 1) {
      neighbors =
        g[i - 1][k - 1] +
        g[i - 1][k] +
        g[i - 1][k + 1] +
        g[i][k - 1] +
        g[i][k + 1] +
        g[0][k - 1] +
        g[0][k] +
        g[0][k + 1];
      // check for bottom right corner
    } else if (i === numRows - 1 && k === numCols - 1) {
      neighbors =
        g[i - 1][k - 1] +
        g[i - 1][k] +
        g[i - 1][0] +
        g[i][k - 1] +
        g[i][0] +
        g[0][k - 1] +
        g[0][k] +
        g[0][0];
    }
    return neighbors;
  }

  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

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
            neighbors = 0;
            //check for neighbors
            checkNeighbors(g, i, k);
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
        // setNumCols={setNumCols}
        // setNumRows={setNumRows}
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
