import React, { useState } from 'react'
import './Game.css'
import { calWin } from '../helper'
import Board from './Board'
import { within } from '@testing-library/react'

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
        <a href='https://github.com/Minkeani/TIC-TAC_TOE'>
            <img src="https://img2.freepng.ru/20180807/veq/kisspng-github-pages-logo-repository-fork-github-logo-1-magentys-5b69de71860c56.3928819415336648815491.jpg" alt="" />
        </a>
        
        {/* <img src='src\img\GitHub-Mark-Light-32px.png' alt='git' href='https://github.com/Minkeani/TIC-TAC_TOE'/> */}
        {startNewGame()}
      <Board
      squares={board}
      click={HandleClick}
      />
      <p>{winner ? 'Winner ' + winner : 'move' + (xIs ? ' X' : ' O')}</p>
    </div>
  )
}
