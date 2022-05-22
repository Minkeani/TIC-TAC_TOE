import React from 'react'
import './Board.css'
import Square from './Square'

export default function Board({squares, click}) {

  return (
    <div className='board'>
      {
          squares.map((square, index) => {
              console.log(square);
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
