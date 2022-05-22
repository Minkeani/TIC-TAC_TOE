import React from 'react'
import './Square.css'

export default function Square(props) {
    console.log(props, 1);
  return (
    <button className='square'
    onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}
