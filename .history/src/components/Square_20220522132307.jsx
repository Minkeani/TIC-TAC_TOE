import React from 'react'
import './Square.css'

export default function Square(props) {
  return (
    <button className='square'>
      {props.value}
    </button>
  )
}
