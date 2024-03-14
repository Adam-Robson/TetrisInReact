import React from 'react'
import Header from './Header'
import GridBoard from './GridBoard'
import NextBlock from './NextBlock'
import ScoreBoard from './ScoreBoard'
import Controls from './Controls'
import MessagePopup from './MessagePopup'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <GridBoard />

        <div className="controls">
          <Controls />
        </div>
          <NextBlock />
          <ScoreBoard />
          <MessagePopup />
      </main>
    </>
  )
}
