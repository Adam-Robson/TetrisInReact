import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  color: var(--text);
  background-color: var(--background);
`;

const StyledDiv = styled.div`
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledDiv >
        <span>Tetris</span>
      </StyledDiv>
    </StyledHeader>
  );
}
