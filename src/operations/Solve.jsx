import React from "react";

function Solve() {
  return <></>;
}
export function solve_board(board) {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++)
      if (board[i][j] === 0) {
        for (let v = 1; v <= 9; v++)
          if (check(board, i, j, v)) {
            board[i][j] = v;
            if (solve_board(board)) board[i][j] = 0;
            else return false;
          }
        if (board[i][j] === 0) return true;
      }
  return false;
}
function check(board, i, j, val) {
  for (let k = 0; k < 9; k++)
    if (board[i][k] === val || board[k][j] === val) return false;
  let box_row = Math.floor(i / 3) * 3;
  let box_col = Math.floor(j / 3) * 3;
  for (let k1 = 0; k1 < 3; k1++)
    for (let k2 = 0; k2 < 3; k2++) {
      if (board[box_row + k1][box_col + k2] === val) return false;
    }
  return true;
}

export default Solve;
