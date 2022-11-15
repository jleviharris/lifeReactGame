export default function checkNeighbors(numRows, numCols, g, i, k) {
  let neighbors = 0;
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
