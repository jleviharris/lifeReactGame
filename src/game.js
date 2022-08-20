// //TODO Checklist:
// //Loop through arrays
// //Check neighbors of index
// //Check if inex should change
// //Save new index value
// //Return new board
// // Check for edge cases
// // Either count all edges as dead or wrap edges around
// export function getNextGeneration(grid, numCols, numRows) {
//   const outputBoard = grid;

//   let neighbors;

//   //function to check how many alive neighbors an index has
//   function checkNeighbors(grid, i, k) {
//     // check for top left corner
//     if (i === 0 && k === 0) {
//       neighbors =
//         grid[numRows - 1][numCols - 1] +
//         grid[numRows - 1][k] +
//         grid[numRows - 1][k + 1] +
//         grid[i][numCols - 1] +
//         grid[i][k + 1] +
//         grid[i + 1][numCols - 1] +
//         grid[i + 1][k] +
//         grid[i + 1][k + 1];
//       // check for top border and wrap to bottom
//     } else if ((i === 0) & (k > 0 || k < numCols - 1)) {
//       neighbors =
//         grid[numRows - 1][k - 1] +
//         grid[numRows - 1][k] +
//         grid[numRows - 1][k + 1] +
//         grid[i][k - 1] +
//         grid[i][k + 1] +
//         grid[i + 1][k - 1] +
//         grid[i + 1][k] +
//         grid[i + 1][k + 1];
//       // check for top right corner
//     } else if (i === 0 && k === numCols - 1) {
//       neighbors =
//         grid[numRows - 1][k - 1] +
//         grid[numRows - 1][k] +
//         grid[numRows - 1][0] +
//         grid[i][k - 1] +
//         grid[i][0] +
//         grid[i + 1][k - 1] +
//         grid[i + 1][k] +
//         grid[i + 1][0];
//       // check for left border and wrap to right side
//     } else if (i > 0 && i < numRows - 1 && k === 0) {
//       neighbors =
//         grid[i - 1][numCols - 1] +
//         grid[i - 1][k] +
//         grid[i - 1][k + 1] +
//         grid[i][numCols - 1] +
//         grid[i][k + 1] +
//         grid[i + 1][numCols - 1] +
//         grid[i + 1][k] +
//         grid[i + 1][k + 1];
//       // check for all indexs not on a border
//     } else if (i > 0 && i < numRows - 1 && k > 0 && k < numCols - 1) {
//       neighbors =
//         grid[i - 1][k - 1] +
//         grid[i - 1][k] +
//         grid[i - 1][k + 1] +
//         grid[i][k - 1] +
//         grid[i][k + 1] +
//         grid[i + 1][k - 1] +
//         grid[i + 1][k] +
//         grid[i + 1][k + 1];
//       // check for right border and wrap to left border
//     } else if (i > 0 && i < numRows - 1 && k === numCols - 1) {
//       neighbors =
//         grid[i - 1][k - 1] +
//         grid[i - 1][k] +
//         grid[i - 1][0] +
//         grid[i][k - 1] +
//         grid[i][0] +
//         grid[i + 1][k - 1] +
//         grid[i + 1][k] +
//         grid[i + 1][0];
//       // check for bottom left corner
//     } else if (i === numRows - 1 && k === 0) {
//       neighbors =
//         grid[i - 1][numCols - 1] +
//         grid[i - 1][k] +
//         grid[i - 1][k + 1] +
//         grid[i][numCols - 1] +
//         grid[i][k + 1] +
//         grid[0][numCols - 1] +
//         grid[0][k] +
//         grid[0][k + 1];
//       // check for bottom border and wrap to top
//     } else if (i === numRows - 1 && k > 0 && k < numCols - 1) {
//       neighbors =
//         grid[i - 1][k - 1] +
//         grid[i - 1][k] +
//         grid[i - 1][k + 1] +
//         grid[i][k - 1] +
//         grid[i][k + 1] +
//         grid[0][k - 1] +
//         grid[0][k] +
//         grid[0][k + 1];
//       // check for bottom right corner
//     } else if (i === numRows - 1 && k === numCols - 1) {
//       neighbors =
//         grid[i - 1][k - 1] +
//         grid[i - 1][k] +
//         grid[i - 1][0] +
//         grid[i][k - 1] +
//         grid[i][0] +
//         grid[0][k - 1] +
//         grid[0][k] +
//         grid[0][0];
//     }
//     return neighbors;
//   }

//   //Loop through arrays
//   for (let i = 0; i < numRows - 1; i++) {
//     for (let k = 0; k < numCols - 1; k++) {
//       //check for neighbors
//       checkNeighbors(grid, i, k);
//       // apply game rules and save new board values
//       if (grid[i][k] === 0 && neighbors === 3) {
//         outputBoard[i][k] = 1;
//       } else if (grid[i][k] === 1 && (neighbors < 2 || neighbors > 3)) {
//         outputBoard[i][k] = 0;
//       }
//       //   else {
//       //     outputBoard[i][k] = grid[i][k];
//       //   }
//     }
//   }

//   return outputBoard;
// }
