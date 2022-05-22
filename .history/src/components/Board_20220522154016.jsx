import React from 'react'
import './Board.css'
import Square from './Square'

export default function Board({squares, click}) {
    console.log(squares);
  return (
    <div className='board'>
      {
          squares.map((square, index) => {
              <Square 
              key={index} 
              value={square}
              onClick={() => click(index)}
              />
          })
      }
    </div>
  )
}
