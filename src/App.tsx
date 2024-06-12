import { MouseEvent, useEffect, useState } from 'react'
import './App.css'
import { Board, Cell, checkBoardForOutcome } from './game'

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<Cell>('x')
  const [board, setBoard] = useState<Board>(["", "", "", "", "", "", "", "", ""])
  const [outcome, setOutcome] = useState<'x' | 'o' | 'draw' | null>(null)

  useEffect(
    () => {
      const outcome = checkBoardForOutcome(board)
      console.log(outcome)
      if (outcome.winner && outcome.winner == "x") setOutcome('x')
      if (outcome.winner && outcome.winner == "o") setOutcome('o')
      if (outcome.outcome == "draw") setOutcome('draw')
    }, [board]
  )

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.innerHTML !== "") return
    if (outcome) return

    const targetSpot = parseInt(e.currentTarget.id)
    let newBoard: Board = [...board]
    newBoard[targetSpot] = currentPlayer
    setBoard(newBoard)

    if (currentPlayer == 'x') setCurrentPlayer('o')
    else if (currentPlayer == 'o') setCurrentPlayer('x')
  }

  return (
    <>
      {<>
        <h1 className="text-3xl font-bold underline mb-10">
          Tic Tac Toe
        </h1>
        <div className='flex justify-center items-center '>
          <div className='grid grid-cols-3 mb-10'>
            {board.map((cell, index) => <div key={index} id={index.toString()} className=' box-content min-h-16 min-w-16 border-4 flex justify-center items-center text-6xl gap-4' onClick={handleClick}>{cell}</div>)}
          </div>
        </div></>
      }
      {outcome && <h2 className=''>Game Over : {outcome} wins
        <br></br>
        <button className='mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={() => {
          window.location.reload()
        }}>Restart</button>
      </h2>}


    </>
  )
}

export default App
