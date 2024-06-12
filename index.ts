const board = [
  ["x", "x", ""],
  ["x", "x", "x"],
  ["", "", ""],
];

const winBoard = [
  ["", "", ""],
  ["x", "o", "x"],
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
    if (item[0] === "") {
      return false;
    }
    if (item[0] === item[1] && item[1] === item[2]) {
      return item[0];
    }
    return false;
  };
  for (let i = 0; i < 3; i++) {
    // check the specific row for a winner
    const match = allMatch(b[i]);
    // if all rows are "X" or "O" return a winner
    if (match !== false) {
      return true;
    }
  }
};
// console.log(checkRows(board));

// check top to botttom
// check if arr[0] x3 , arr[1] x3, arr[2] x3 of each row are matching

const checkColumns = (b) => {
  const checkMatchColumns = (b, i) => {
    if (b[0][i] === "" || b[1][i] === "" || b[2][i] === "") {
      return false;
    }
    if (b[0][i] == b[1][i] && b[1][i] == b[2][i]) {
      return { winCondition: true, winner: b[0][i] };
    }
    return { winCondition: false, winner: null };
  };
  for (let i = 0; i < 3; i++) {
    const match = checkMatchColumns(b, i);
    if (match.winCondition === true) {
      return true;
    }
  }
  return false;
};

// console.log("hellothere:", checkColumns(board));
// check diagonals
//  check if arr[0], arr[1], arr[2] are matching and
const checkDiagonals = (b) => {
  const diagCheck = () => {
    if (b[0][0] === b[1][1] && b[1][1] === b[2][2] && b[0][0] !== "") {
      return true;
    } else if (b[2][0] === b[1][1] && b[1][1] === b[0][2] && b[2][0] !== "") {
      return true;
    } else {
      return false;
    }
  };
  const diagwin = diagCheck();
  return diagwin;
};

// if any are true, return true, else return false
// checkDiagonals
// const returnWinLogic = (b) => {
//   const rowWin = checkRows(b);

//   checkDiagonals(b);
//   checkColumns(b);
// };
const didSomeoneWin = (b) => {
  if (checkRows(b) == true) {
    return true;
  } else if (checkDiagonals(b) == true) {
    return true;
  } else if (checkColumns(b)) {
    return true;
  } else {
    return false;
  }
};

console.log("Somone won:", didSomeoneWin(board));
