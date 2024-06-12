import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { didSomeoneWin } from ".././index"

function App() {
  const numberboard = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
  ]
  const map = {
    1: { index1: 0, index2: 0 },
    4: { index1: 0, index2: 1 },
    7: { index1: 0, index2: 2 },
    2: { index1: 1, index2: 0 },
    5: { index1: 1, index2: 1 },
    8: { index1: 1, index2: 2 },
    3: { index1: 2, index2: 0 },
    6: { index1: 2, index2: 1 },
    9: { index1: 2, index2: 2, }
  }
  const blankboard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]
  const [turn, setTurn] = useState(true)
  const [board, setBoard] = useState(blankboard)
  const [gameOn, setGameOn] = useState(true)
  const [winner, setWinner] = useState('')

  const handleClick = (e) => {
    const targetSpot = e.target.id
    if (turn) {
      console.log('board before', board)
      let copy = [...board]
      copy[map[targetSpot].index1][map[targetSpot].index2] = 'X'
      setBoard(copy)
      // blankboard[map[targetSpot].index1][map[targetSpot].index2] = 'X'
      e.target.innerHTML = 'X'
    } else {
      // blankboard[map[targetSpot].index1][map[targetSpot].index2] = 'O'
      let copy = [...board]
      copy[map[targetSpot].index1][map[targetSpot].index2] = 'O'
      e.target.innerHTML = 'O'
    }
    const val = didSomeoneWin(board)

    if (val) {
      setGameOn(false)
      if (turn) {
        setWinner('X')

      } else {
        setWinner('O')

      }
    }

    console.log(val)
    setTurn(!turn)
    // set piece on the board
    console.log(blankboard)
    console.log(board)



    // check if there is a win on the board
    // change turn if game is still continuing
    // end game if there is a winner or the board is ful
  }
  return (
    <>
      {gameOn && <>
        <h1 className="text-3xl font-bold underline">
          Tic Tac Toe
        </h1>
        <button onClick={() => {
          setTurn(!turn)
        }}>Turn {turn ? <>X</> : <>O</>}</button>
        {/* turn true = x, turn false = o */}
        <div className='grid grid-cols-3 '>
          {numberboard.map((x) => {
            return <div className='m-4 p-4'>{x.map((num) => {
              return <div id={num} className=' box-content w-48 h-48 min-h-16 min-w-16 border-4 flex justify-center items-center text-6xl gap-4' onClick={(e) => {
                handleClick(e)
              }}></div>
            })} </div>
          })}

        </div></>
      }
      {!gameOn && <h1>Game Over : {winner} wins</h1>}

    </>
  )
}

export default App
