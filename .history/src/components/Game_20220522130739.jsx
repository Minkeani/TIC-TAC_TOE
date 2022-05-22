import React, { useState } from 'react'
import './Game.css'
import Board from './Board'

export default function Game() {

    const [board, setBoard] = useState(Array(9).fill(''))

  return (
    <div className='wrapper'>
      <Board/>
    </div>
  )
}
