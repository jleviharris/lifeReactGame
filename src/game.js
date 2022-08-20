//TODO Checklist:
//Loop through arrays
//Check neighbors of index
//Check if inex should change
//Save new index value
//Return new board
// Check for edge cases
// Either count all edges as dead or wrap edges around
export function getNextGeneration(inputBoard) {
  const outputBoard = inputBoard;
  const numCols = inputBoard[0].length;
  const numRows = inputBoard.length;
  let neighbors;

  //function to check how many alive neighbors an index has
  function checkNeighbors(inputBoard, i, k) {
    // check for top left corner
    if (i === 0 && k === 0) {
      neighbors =
        inputBoard[numRows - 1][numCols - 1] +
        inputBoard[numRows - 1][k] +
        inputBoard[numRows - 1][k + 1] +
        inputBoard[i][numCols - 1] +
        inputBoard[i][k + 1] +
        inputBoard[i + 1][numCols - 1] +
        inputBoard[i + 1][k] +
        inputBoard[i + 1][k + 1];
      // check for top border and wrap to bottom
    } else if ((i === 0) & (k > 0 || k < numCols - 1)) {
      neighbors =
        inputBoard[numRows - 1][k - 1] +
        inputBoard[numRows - 1][k] +
        inputBoard[numRows - 1][k + 1] +
        inputBoard[i][k - 1] +
        inputBoard[i][k + 1] +
        inputBoard[i + 1][k - 1] +
        inputBoard[i + 1][k] +
        inputBoard[i + 1][k + 1];
      // check for top right corner
    } else if (i === 0 && k === numCols - 1) {
      neighbors =
        inputBoard[numRows - 1][k - 1] +
        inputBoard[numRows - 1][k] +
        inputBoard[numRows - 1][0] +
        inputBoard[i][k - 1] +
        inputBoard[i][0] +
        inputBoard[i + 1][k - 1] +
        inputBoard[i + 1][k] +
        inputBoard[i + 1][0];
      // check for left border and wrap to right side
    } else if (i > 0 && i < numRows - 1 && k === 0) {
      neighbors =
        inputBoard[i - 1][numCols - 1] +
        inputBoard[i - 1][k] +
        inputBoard[i - 1][k + 1] +
        inputBoard[i][numCols - 1] +
        inputBoard[i][k + 1] +
        inputBoard[i + 1][numCols - 1] +
        inputBoard[i + 1][k] +
        inputBoard[i + 1][k + 1];
      // check for all indexs not on a border
    } else if (i > 0 && i < numRows - 1 && k > 0 && k < numCols - 1) {
      neighbors =
        inputBoard[i - 1][k - 1] +
        inputBoard[i - 1][k] +
        inputBoard[i - 1][k + 1] +
        inputBoard[i][k - 1] +
        inputBoard[i][k + 1] +
        inputBoard[i + 1][k - 1] +
        inputBoard[i + 1][k] +
        inputBoard[i + 1][k + 1];
      // check for right border and wrap to left border
    } else if (i > 0 && i < numRows - 1 && k === numCols - 1) {
      neighbors =
        inputBoard[i - 1][k - 1] +
        inputBoard[i - 1][k] +
        inputBoard[i - 1][0] +
        inputBoard[i][k - 1] +
        inputBoard[i][0] +
        inputBoard[i + 1][k - 1] +
        inputBoard[i + 1][k] +
        inputBoard[i + 1][0];
      // check for bottom left corner
    } else if (i === numRows - 1 && k === 0) {
      neighbors =
        inputBoard[i - 1][numCols - 1] +
        inputBoard[i - 1][k] +
        inputBoard[i - 1][k + 1] +
        inputBoard[i][numCols - 1] +
        inputBoard[i][k + 1] +
        inputBoard[0][numCols - 1] +
        inputBoard[0][k] +
        inputBoard[0][k + 1];
      // check for bottom border and wrap to top
    } else if (i === numRows - 1 && k > 0 && k < numCols - 1) {
      neighbors =
        inputBoard[i - 1][k - 1] +
        inputBoard[i - 1][k] +
        inputBoard[i - 1][k + 1] +
        inputBoard[i][k - 1] +
        inputBoard[i][k + 1] +
        inputBoard[0][k - 1] +
        inputBoard[0][k] +
        inputBoard[0][k + 1];
      // check for bottom right corner
    } else if (i === numRows - 1 && k === numCols - 1) {
      neighbors =
        inputBoard[i - 1][k - 1] +
        inputBoard[i - 1][k] +
        inputBoard[i - 1][0] +
        inputBoard[i][k - 1] +
        inputBoard[i][0] +
        inputBoard[0][k - 1] +
        inputBoard[0][k] +
        inputBoard[0][0];
    }
    return neighbors;
  }

  //Loop through arrays
  for (let i = 0; i < numRows - 1; i++) {
    for (let k = 0; k < numCols - 1; k++) {
      //check for neighbors
      checkNeighbors(inputBoard, i, k);
      // apply game rules and save new board values
      if (inputBoard[i][k] === 0 && neighbors === 3) {
        outputBoard[i][k] = 1;
      } else if (inputBoard[i][k] === 1 && (neighbors < 2 || neighbors > 3)) {
        outputBoard[i][k] = 0;
      } else {
        outputBoard[i][k] = inputBoard[i][k];
      }
    }
  }

  return outputBoard;
}
