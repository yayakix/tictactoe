const board = [
  ["x", "o", "o"],
  ["o", "x", "o"],
  ["o", "o", "o"],
];

const winBoard = [
  ["", "", ""],
  ["x", "x", "x"],
  ["", "", ""],
];

const loseBoard = [
  ["", "", ""],
  ["x", "o", "x"],
  ["", "", ""],
];

// how to check winner, and overall condition of the board

// check rows
// check if all parts of a row are matching w/ reduce func
const checkRows = (b: typeof board) => {
  const allMatch = (item: string[]) => {
    if (item[0] === item[1] && item[1] === item[2]) {
      return item[0];
    }
    return "";
  };
  for (let i = 0; i < 3; i++) {
    // check the specific row for a winner
    const match = allMatch(b[i]);
    // if all rows are "X" or "O" return a winner
    if (match !== "") {
      return match;
    }
  }
};
// console.log(checkRows(board));

// check top to botttom
// check if arr[0] x3 , arr[1] x3, arr[2] x3 of each row are matching

// const checkColumns = (b) => {
//   const checkMatchColumns = (b, i) => {
//     if (b[0][i] == b[1][i] && b[1][i] == b[2][i]) {
//       return { winCondition: true, winner: b[0][i] };
//     }
//     return { winCondition: false, winner: null };
//   };
//   for (let i = 0; i < 3; i++) {
//     const match = checkMatchColumns(b, i);
//     if (match.winCondition === true) {
//       return `Winner: ${match.winner}`;
//     }
//   }
//   return `Nobody won`;
// };

// console.log("hellothere:", checkColumns(board));
// check diagonals
//  check if arr[0], arr[1], arr[2] are matching and
const checkDiagonals = (b) => {
  // top left to bot right

  const diagCheck = () => {
    if (b[0][0] === b[1][1] && b[1][1] === b[2][2]) {
      return "diag hit";
    } else if (b[2][0] === b[1][1] && b[1][1] === b[0][2]) {
      return "diag hitttt";
    } else {
      return "nothing hit";
    }
  };

  const diagwin = diagCheck();
  return diagwin;

  console.log(diagwin);
};

console.log("hellothere:", checkDiagonals(board));
