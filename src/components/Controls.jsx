import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../features/gameSlice'

export default function Controls(props) {
  const dispatch = useDispatch()
  const isRunning = useSelector(state => state.isRunning)
  const speed = useSelector(state => state.speed)
  const requestRef = useRef()
  const lastUpdateTimeRef = useRef(0)
  const progressTimeRef = useRef(0)

  function update(time) {
    requestRef.current = requestAnimationFrame(update)
    if (!isRunning) {
      return
    }
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time
    }
    const deltaTime = time - lastUpdateTimeRef.current
    progressTimeRef.current += deltaTime
    if (progressTimeRef.current > speed) {
      dispatch(moveDown())
      progressTimeRef.current = 0
    }
    lastUpdateTimeRef.current = time
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(requestRef.current)
  }, [isRunning])

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
