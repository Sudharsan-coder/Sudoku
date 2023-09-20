import React, { useEffect, useRef, useState } from "react";
import { input_button_pressed } from "./Board";
import { useContext } from "react";
function cell({ row, col }) {
  const [cell_value, set_cell_value] = useState("");
  let set_input_pressed = useContext(input_button_pressed);
  const isLabel = useRef(false);
  let board = JSON.parse(localStorage.getItem("board"));
  if (set_input_pressed && board[row][col] !== 0) isLabel.current = true;
  return (
    <td style={{ border: "1px solid black", padding: "10px" }}>
      {isLabel.current && board[row][col] !== 0 ? (
        <label style={{ color: check(row, col) ? "black" : "red" }}>
          {board[row][col]}
        </label>
      ) : (
        <input
          type="text"
          onClick={(e) => {
            e.target.value = "";
          }}
          onBlur={(e) => {
            if (e.target.value === ""){ e.target.value = 0;
              board[row][col]=0
              localStorage.setItem("board",JSON.stringify(board))
            }
          }}
          onChange={(e) => {
            let current_value = Number(e.target.value) % 10;
            e.target.value = "";
            // console.log(current_value)
            board = JSON.parse(localStorage.getItem("board"));
            board[row][col] = current_value;
            localStorage.setItem("board", JSON.stringify(board));
            set_cell_value(current_value);
          }}
          value={`${board[row][col]}`}
          style={{
            width: "25px",
            height: "25px",
            border: "none",
            margin: "0px 0px 0px 10px",
            background: check(row, col) ? "white" : "red",
            color: "black",
          }}
        ></input>
      )}
    </td>
  );
}

export default cell;

function Validity(i, j, val, main_board) {
  for (let k = 0; k < 9; k++) {
    if (k !== j && main_board[i][k] === val)
      //column
      return false;
    if (k !== i && main_board[k][j] === val)
      //row
      return false;
  }
  let box_row = Math.floor(i / 3) * 3;
  let box_col = Math.floor(j / 3) * 3;
  for (let i1 = 0; i1 < 3; i1++)
    for (let j1 = 0; j1 < 3; j1++) {
      let current_row = box_row + i1;
      let current_col = box_col + j1;
      if (
        current_row !== i &&
        current_col !== j &&
        main_board[current_row][current_col] === val
      )
        return false;
    }
  return true;
}
function check(i, j) {
  let main_board = JSON.parse(localStorage.getItem("board"));
  if (main_board[i][j] !== 0 && !Validity(i, j, main_board[i][j], main_board))
    return false;
  return true;
}
