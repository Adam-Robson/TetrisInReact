import React from 'react'
import Header from './Header'
import GridBoard from './GridBoard'
import NextBlock from './NextBlock'
import ScoreBoard from './ScoreBoard'
import Controls from './Controls'
import MessagePopup from './MessagePopup'

export default function App() {
  return (
    <main>
      <Header />
      <div className="container">
      <div className="content">
        <div className="game-section">
          <GridBoard />
          <NextBlock />
        </div>
        <div className="info-section">
          <ScoreBoard />
          <Controls />
          </div>
          </div>
      </div>
      <MessagePopup />
    </main>
  )
}
