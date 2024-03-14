export default function GridSquare({color}) {
  const classes = `grid-square color-${color}`;
  const squareStyle = {
    backgroundColor: `var(--color-${color})`,
  }

  return (
    <div className={classes} style={squareStyle} />
  );
}
