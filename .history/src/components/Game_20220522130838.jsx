import React, { useState } from 'react'
import './Game.css'
import Board from './Board'

export default function Game() {

    const [board, setBoard] = useState(Array(9).fill(null))

    const [xIs, setXIs] = useState(true)

  return (
    <div className='wrapper'>
      <Board/>
    </div>
  )
}
