import { useState } from "react"
import { TURNS, WINNER_COMBOS } from "./constants.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { Square } from "./components/Square.jsx"

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board")
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn")
    return turnFromStorage ? turnFromStorage : TURNS.X
  })

  const [winner, setWinner] = useState(() => {
    const winnerFromStorage = window.localStorage.getItem("winner")
    return winnerFromStorage ? winnerFromStorage : null
  })

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo

      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // revisar si hay ganador
    window.localStorage.setItem("board", JSON.stringify(newBoard))
    window.localStorage.setItem("turn", newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      window.localStorage.setItem("winner", newWinner)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(""))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem("turn")
    window.localStorage.removeItem("board")
    window.localStorage.removeItem("winner")
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((value, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {value}
            </Square>
          )
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}> {TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
