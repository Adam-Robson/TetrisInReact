import React from 'react'
import { useSelector } from 'react-redux'
import GridSquare from './GridSquare'
import { shapes } from '../utils'
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 80%;
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(var(--cols), var(--tile-size));
  grid-gap: 0.5rem;
`;

export default function GridBoard() {
  const game = useSelector(state => state)
  const { grid, shape, rotation, x, y } = game

  const block = shapes[shape][rotation]
  const blockColor = shape

  const gridSize = 100 / grid.length;

  const gridSquares = grid.map((rowArray, row) => {

    rowArray.map((square, col) => {

      const blockX = col - x
      const blockY = row - y
      let color = square

      if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
        color = block[blockY][blockX] === 0 ? color : blockColor
      }

      const k = row * grid[0].length + col

      return <GridSquare key={k} color={color} size={gridSize} />
    })
  })

  return (
    <StyledDiv>
      {gridSquares}
    </StyledDiv>
  )
}
