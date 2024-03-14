import React from 'react'
import GridSquare from './GridSquare'
import { useSelector } from 'react-redux'
import { shapes } from '../utils'
import styled from 'styled-components'

const StyledSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1.5rem);
    grid-template-rows: repeat(4, 1.5rem);
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    margin-left: 2rem;
  `;

export default function NextBlock() {

  const nextShape = useSelector(state => state.nextShape)
  const block = shapes[nextShape][0];
  const gridSize = 100 / block.length;

  const grid = block.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      const color = square ? nextShape : 0
      return <GridSquare key={`${row}${col}`} color={color} size={gridSize} />
    })
  });

  return (
    <StyledSection>
      {grid}
    </StyledSection>
  )
}
