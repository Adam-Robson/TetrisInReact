import React from 'react'

import GridBoard from './GridBoard'
import NextBlock from './NextBlock'
import ScoreBoard from './ScoreBoard'
import Controls from './Controls'
import MessagePopup from './MessagePopup'
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris with Redux</h1>
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
      <Controls />
      <MessagePopup />
    </div>
  )
}
