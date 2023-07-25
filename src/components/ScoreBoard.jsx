import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { restart, resume, pause } from '../features/gameSlice'
export default function ScoreBoard() {
  const dispatch = useDispatch()
  const isRunning = useSelector(state => state.isRunning)
  const gameOver = useSelector(state => state.gameOver)
  const score = useSelector(state => state.score)

  return (
    <div className="score-board">
      <div>Score:{ score }</div>
      <div>Level: 1</div>
      <button className="score-board-button" onClick={(e) => {
        if (gameOver) { return }
        if (isRunning) {
          dispatch(pause())
        } else {
          dispatch(resume())
        }
      }
      }>{ isRunning ? 'Pause' : 'Play' }</button>
      <button className="score-board-button" onClick={(e) => {
        dispatch(restart())
      }}>Restart</button>
    </div>
  )
}
