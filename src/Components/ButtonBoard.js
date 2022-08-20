import React from "react";
import { getNextGeneration } from "../game";

const ButtonBoard = ({ grid, setGrid, numCols, numRows }) => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="buttonContainer">
      <ul>
        <li>
          <button
            onClick={() => {
              setGrid(() => {
                getNextGeneration(grid, numCols, numRows);
              });
            }}
          >
            Start
          </button>
        </li>
        <li>
          <button>Stop</button>
        </li>
        <li>
          <button>Resume</button>
        </li>
        <li>
          <button onClick={refreshPage}>Reset</button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonBoard;
