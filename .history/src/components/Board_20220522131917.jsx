import React from 'react'
import './Board.css'
import Square from './Square'

export default function Board({squares, click}) {
  return (
    <div className='board'>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
    </div>
  )
}
