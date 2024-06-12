export type Cell = "x" | "o" | "";
export type Board = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];

const board: Board = Array(9).fill("") as Board;

interface Outcome {
  outcome: "win" | "draw" | null;
  winner?: "x" | "o";
}

type WinningPosition = [number, number, number];

const boardExample = ["x", "x", "x", "o", "o", "x", "o", "o", ""];

export function checkBoardForOutcome(board: Board): Outcome {
  const possibleWinningPositions: WinningPosition[] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < possibleWinningPositions.length; i++) {
    const position = possibleWinningPositions[i];
    const boardValues = position.map((i) => board[i]);
    // boardValues = ['x', 'x', 'x']
    if (
      boardValues[0] == boardValues[1] &&
      boardValues[1] == boardValues[2] &&
      boardValues[0] !== ""
    ) {
      console.log("this is a win!!");
      return { outcome: "win", winner: boardValues[0] };
    } else {
      console.log("this is not a win !!");
      if (board.every((value) => value !== "")) return { outcome: "draw" };
    }
  }
  return { outcome: null };
}
