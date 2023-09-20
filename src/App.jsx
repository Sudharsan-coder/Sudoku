import { useState } from "react";
import "./App.css";
import Board from "./board/Board";
import Check_Button from "./operations/Check_Button.jsx";
function App() {
  const [display, setDisplay] = useState(false);
  const [error_msg, set_errot_msg] = useState("");
  get_board();
  async function get_board() {
    let ans = [];
    const url =
      "https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value}}}";
    const options = {
      method: "GET",
    };
    try {
      if (!display) {
        const response = await fetch(url);
        const result = await response.json();
        ans = result.newboard.grids[0].value;
        localStorage.setItem("board", JSON.stringify(ans));
        setDisplay(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="main_container">
      {display && (
        <div className="board">
          <Board setDisplay={setDisplay} />
          <Check_Button set_error_msg={set_errot_msg} />
        </div>
      )}
      <div className="error_msg">
        <div>{error_msg}</div>
      </div>
      <div className="discription">
        Discription
        <br />
        <br />
        <br />
        Step1: Change the board by pressing the New Board button, untill your
        desired board arrives.
        <br />
        <br />
        Step2: Click the set input button and start to solve.
        <br />
        <br />
        Step3: If you want to change some values in the fixed cells use the Edit
        Input button.
        <br />
        <br />
        Step4: If you got error(a red color cell) then use the check button to
        get a detailed view of the error.
        <br />
        <br />
        Step5: If you are stuck at some point then click the solve button to get
        the solution.
        <br />
        <br />
      </div>
    </div>
  );
}
export default App;