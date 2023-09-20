import React, { useState } from "react";
import Table from "./table";
import { createContext } from "react";
import {solve_board} from "./Solve.jsx";
export const input_button_pressed = createContext();
function Board() {
  let board_component = [];
  const [input_pressed, set_input_pressed] = useState(false);
  const [count,setCount]=useState(0)
  for (let i = 0; i < 3; i++) {
    let row_component_arr = [];
    for (let j = 0; j < 3; j++) {
      row_component_arr.push(
        <Table key={`${i} ${j}`} column_start={j} row_start={i} />
      );
    }
    board_component.push(
      <div key={i} style={{ display: "flex" }}>
        {row_component_arr}
      </div>
    );
  }
  return (
    <>
      <input_button_pressed.Provider value={input_pressed}>
        {board_component}
      </input_button_pressed.Provider>
      <button
        onClick={() => {
          set_input_pressed(true);
        }}
      >
        Set Input
      </button>
      <button
        onClick={() => {
          set_input_pressed(false);
        }}
      >
        Play
      </button>
      <button
      onClick={() => {
        let board = JSON.parse(localStorage.getItem("board"));
        // console.log(board);
        solve_board(board);
        localStorage.setItem("board", JSON.stringify(board));
        setCount(count+1)
      }}
    >
      Solve
    </button>
    </>
  );
}

export default Board;
