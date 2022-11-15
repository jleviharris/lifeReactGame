import React from "react";
import produce from "immer";

const BoardContainer = ({
  grid,
  numCols,
  setGrid,
}) => {
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
              backgroundColor: grid[i][k] ? "rgb(255 255 255)" : undefined,
              border: "1px solid #595959",
            }}
          />
        ))
      )}
    </div>
  );
};

export default BoardContainer;
