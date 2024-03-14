import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../features/gameSlice'

export default function Controls() {
  const dispatch = useDispatch()
  const isRunning = useSelector(state => state.isRunning)
  const gameOver = useSelector(state => state.gameOver)

  function handleMoveLeft() {
    if (isRunning && !gameOver) {
      dispatch(moveLeft());
    }
  }


  function handleMoveRight() {
    if (isRunning && !gameOver) {
      dispatch(moveRight());
    }
  }


  function handleRotate() {
    if (isRunning && !gameOver) {
      dispatch(rotate());
    }
  }


  function handleMoveDown() {
    if (isRunning && !gameOver) {
      dispatch(moveDown());
    }
  }

  return (
   <div className="control-buttons">
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={handleMoveLeft}
      >
        Left
      </button>

      <button

        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={handleMoveRight}
      >
        Right
      </button>

      <button

        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={handleRotate}
      >
        Rotate
      </button>

      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={handleMoveDown}
      >
        Down
      </button>
    </div>
  )
}
