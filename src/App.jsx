import "./App.css";
import Board from "./Board";
import Check_Button from "./Check_Button.jsx";
let board = new Array(9);
for (let i = 0; i < 9; i++) board[i] = new Array(9).fill(0);
localStorage.setItem("board", JSON.stringify(board));
function App() {
  return (
    <div className="main_container">
      <div className="board">
        <Board />
        <Check_Button />
      </div>
      <div className="discription">Discription<br/><br/><br/>Step1: set the input values by clicking the Set Input button<br/><br/>Step2: Click the play button and start to solve<br/><br/>Step3: if you are stuck at some point then click the solve button to get the solution.<br/><br/>Additional option : use the check button to get a detailed view of the error </div>
    </div>
  );
}

export default App;
