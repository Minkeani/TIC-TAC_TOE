import React, { useState } from 'react'
import './Game.css'
import { calWin } from '../helper'
import Board from './Board'

export default function Game() {

    const [board, setBoard] = useState(Array(9).fill(null))


    const [xIs, setXIs] = useState(true)

    const winner = calWin(board)

    const HandleClick = (index) => {
        const BoardCopy = [...board]

        if(winner || BoardCopy[index]) return

        BoardCopy[index] = xIs ? 'X' : 'O'

        setBoard(BoardCopy)
        setXIs(!xIs)
    }

    const startNewGame = () => {
        return (
            <button className='startNewGame'
            onClick={() => setBoard(Array(9).fill(null))}
            >
                Начать заново
            </button>
        )
    }

  return (
    <div className='wrapper'>
        {startNewGame()}
      <Board
      squares={board}
      click={HandleClick}
      />
    </div>
  )
}
