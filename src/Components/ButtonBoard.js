import React from "react";
import runApp from "../App";

const ButtonBoard = ({
  runningRef,
  running,
  setRunning,
  runApp,
  numRows,
  numCols,
  setGrid,
  speed,
  setSpeed,
}) => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="buttonContainer">
      <ul>
        <li>
          <button
            onClick={() => {
              setRunning(!running);
              if (!running) {
                runningRef.current = true;
                runApp();
              }
            }}
          >
            {running ? "STOP" : "START"}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              const rows = [];
              for (let i = 0; i < numRows; i++) {
                rows.push(
                  Array.from(Array(numCols), () =>
                    Math.random() > 0.5 ? 1 : 0
                  )
                );
              }
              setGrid(rows);
            }}
          >
            RANDOM
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setSpeed(750);
            }}
          >
            SLOW
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setSpeed(100);
            }}
          >
            FAST
          </button>
        </li>
        <li>
          <button onClick={refreshPage}>RESET</button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonBoard;
