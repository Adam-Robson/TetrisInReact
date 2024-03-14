import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../features/gameSlice'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 9rem;
  left: 12rem;
`;

const StyledButton = styled.button`
  width: 4.5rem;
  margin: 0.5rem;
  height: 3.5rem;
  text-align: center;
  display: block;
  border-width: 3px;
  border-top-color: var(--button-color-t);
  border-left-color: var(--button-color-l);
  border-right-color: var(--button-color-r);
  border-bottom-color: var(--button-color-b);
`;

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
   <StyledDiv>
      <StyledButton
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={handleMoveLeft}
      >
        Left
      </StyledButton>

      <StyledButton

        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={handleMoveRight}
      >
        Right
      </StyledButton>

      <StyledButton

        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={handleRotate}
      >
        Rotate
      </StyledButton>

      <StyledButton
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={handleMoveDown}
      >
        Down
      </StyledButton>
    </StyledDiv>
  )
}
