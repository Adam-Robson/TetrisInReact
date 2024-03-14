import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15rem;
  height: 15rem;
  background-color: var(--color-3)
  color: var(--text);
  text-align: center;
`;

export default function MessagePopup() {
  const isRunning = useSelector(state => state.isRunning)
  const gameOver = useSelector(state => state.gameOver)
  let message = ''
  let isHidden = 'hidden'

  if (gameOver) {
    message = 'Game Over'
    isHidden = ''
  } else if (!isRunning) {
    message = 'Paused'
    isHidden = ''
  }

  return (
    <StyledDiv className={`${isHidden}`}>
      <h1>{message}</h1>
    </StyledDiv>
  )
}
