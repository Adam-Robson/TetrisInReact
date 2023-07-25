import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../features/gameSlice.js'

export default function Controls(props) {
  const dispatch = useDispatch()
  const { isRunning } = useSelector(state => state)

  return (
  <div className="controls">
      <button
        disabled={!isRunning}
        className="control-button"
        onClick={(e) => {
          dispatch(moveLeft())
        }}>Left</button>

      <button
        disabled={!isRunning}
        className="control-button"
        onClick={(e) => {
          dispatch(moveRight())
        }}>Right</button>

      <button
        disabled={!isRunning}
        className="control-button"
        onClick={(e) => {
          dispatch(rotate())
        }}>Rotate</button>

      <button
        disabled={!isRunning}
        className="control-button"
        onClick={(e) => {
          dispatch(moveDown())
          // ...
        }}>Down</button>

  </div>
  )
}
