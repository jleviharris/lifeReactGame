import React from "react";
import { useState } from "react";
import produce from "immer";

const BoardContainer = ({
  grid,
  numCols,
  numRows,
  setGrid,
  // setNumCols,
  // setNumRows,
}) => {
  //   const [grid, setGrid] = useState(() => {
  //     const rows = [];
  //     for (let i = 0; i < numRows; i++) {
  //       rows.push(Array.from(Array(numCols), () => 0));
  //     }
  //     return rows;
  //   });

  return (
    <div
      className="boardContainer"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, auto)`,
      }}
    >
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <div
            key={i - k}
            onClick={() => {
              const newGrid = produce(grid, (gridCopy) => {
                gridCopy[i][k] = grid[i][k] ? 0 : 1;
              });
              setGrid(newGrid);
            }}
            style={{
              width: 10,
              height: 10,
              backgroundColor: grid[i][k] ? "#F68E5F" : undefined,
              border: "1px solid #595959",
            }}
          />
        ))
      )}
    </div>
  );
};

export default BoardContainer;
