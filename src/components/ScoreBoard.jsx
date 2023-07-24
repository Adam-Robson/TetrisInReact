import React from 'react'

export default function ScoreBoard() {
  return (
    <div className="score-board">
      <div>Score: 0</div>
      <div>Level: 1</div>
      <button className="score-board-button" onClick={(e) => {
        console.log('play')
      }}>Play</button>
      <button className="score-board-button" onClick={(e) => {
        console.log('restart')
      }}>Restart</button>
    </div>
  )
}
