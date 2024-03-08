import { useState } from "react";
import confetti from "canvas-confetti";
import { TURNS, WINNER_COMBOS } from "./constants.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { Square } from "./components/Square.jsx";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;

      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {board.map((value, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              children={value}
            ></Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}> {TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
