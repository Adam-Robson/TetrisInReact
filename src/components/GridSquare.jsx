/* eslint-disable react/prop-types */
import React from 'react'

export default function GridSquare(props) {
  const classes = `grid-square color-${props.color}`
  return <div className={ classes } />
}
