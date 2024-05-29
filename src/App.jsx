import { useState } from 'react'
import SquareComponent from './buttonComponent'
import './App.css'

function App() {
  return (
    <>
      <div className="board-row">
        <SquareComponent />
        <SquareComponent />
        <SquareComponent />
      </div>

      <div className="board-row">
        <SquareComponent />
        <SquareComponent />
        <SquareComponent />
      </div>

      <div className="board-row">
        <SquareComponent />
        <SquareComponent />
        <SquareComponent />
      </div>
    </>
  )
}

export default App
