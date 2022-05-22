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
    }

  return (
    <div className='wrapper'>
      <Board
      squares={board}
      />
    </div>
  )
}
