import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
  border-style: solid;
  outline: solid 2px var(--color-4);
  width: var(--tile-size);
  height: var(--tile-size);
  border-width: var(--border-width);
  border-left-color: var(--border-color-l);
  border-top-color: var(--border-color-t);
  border-right-color: var(--border-color-r);
  border-bottom-color: var(--border-color-b);
`;
export default function GridSquare({color, size}) {
  const classes = `grid-square color-${color}`;
  const style = {
    width: `${size}%`,
    paddingBottom: `${size}%`
 }

  return (
    <StyledDiv className={classes} style={style} />
  );
}
