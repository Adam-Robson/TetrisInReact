import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { restart, resume, pause } from '../features/gameSlice'
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: absolute;
  right: 2rem;
`;

const StyledButton = styled.button`
  min-width: 4.5em;
  max-width: 4.5em;
  min-height: 3.5em;
  max-height: 3.5em;
  display: block;
  padding: 0.5em;
  margin: 0.5em 0;
  border-width: 3px;
  border-top-color: var(--button-color-t);
  border-left-color: var(--button-color-l);
  border-right-color: var(--button-color-r);
  border-bottom-color: var(--button-color-b);
`;

const StyledSpan = styled.span`
  display: block;
  margin: 0.5rem 0.75rem;
  font-size: 1.5rem;
  color: var(--text);
  text-align: center;
  text-transform: uppercase;
`;

export default function ScoreBoard() {
  const dispatch = useDispatch()
  const isRunning = useSelector(state => state.isRunning)
  const gameOver = useSelector(state => state.gameOver)
  const score = useSelector(state => state.score)

  function handlePlayPause() {
    if (gameOver) return;
    if (isRunning) {
      dispatch(pause())
    } else {
      dispatch(resume())
    }
  }


  return (
    <StyledDiv>
      <StyledSpan>Score: { score }</StyledSpan>
      <StyledSpan >Level: 1</StyledSpan>

      <StyledButton onClick={handlePlayPause} disabled={gameOver}>
        {isRunning ? 'Pause' : 'Play'}
      </StyledButton>
      <StyledButton onClick={() => {
        dispatch(restart())
      }}>Restart</StyledButton>
    </StyledDiv>
  )
}
