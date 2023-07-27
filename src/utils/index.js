export function randomValue(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min
}

export function defaultGrid() {
  const rows = 18
  const cols = 10
  const array = []
  for (let row = 0; row < rows; row++) {
    array.push([])
    for (let col = 0; col < cols; col++) {
      array[row].push(0)
    }
  }
  return array
}

/*
  each shape represented by capital letter.
  each rotation is accounted for in a nested array.
*/
export const shapes = [
  // none
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  // I
  [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ]
  ],
  // T
  [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ]
  ],
  // L
  [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ],

    [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 1, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ]
  ],
  // J
  [
    [
      [1, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0]
    ]
  ],
  // Z
  [
    [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ]
  ],
  // S
  [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0]
    ]
  ],
  // O
  [
    [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ]
]

export function randomShapesIndex() {
  return randomValue(1, shapes.length - 1)
}

/* default game state */
export function defaultGameState() {
  return {
    grid: defaultGrid(),
    shape: randomShapesIndex(),
    rotation: 0,
    x: 5,
    y: 5,
    nextShape: randomShapesIndex(),
    isRunning: true,
    score: 0,
    speed: 1000,
    gameOver: false
  }
}

/*
player must know if a move is available.
function needed to determine if current
block can make a move to new x, y,
and/or rotate. function parameters =
shape, grid, x, y, rotation.
also determine if move will make block
overlap board edges or another block.
return true if possible, and false if not.

also given the shape and current
rotation need to be able to easily
find the next rotation of a shape.
*/

export function nextRotation(shape, rotation) {
  return (rotation + 1) % shapes[shape].length
}

export function canMoveTo(shape, grid, x, y, rotation) {
  const currentShape = shapes[shape][rotation]
  for (let row = 0; row < currentShape.length; row++) {
    for (let col = 0; col < currentShape[row].length; col++) {
      if (currentShape[row][col] !== 0) {
        const proposedX = col + x
        const proposedY = row + y
        if (proposedY < 0) {
          continue
        }
        const possibleRow = grid[proposedY]
        if (possibleRow) {
          if (possibleRow[proposedX] === undefined || possibleRow[proposedX] !== 0) {
            return false
          }
        }
      } else {
        return false
      }
    }
  }
  return true
}


export function addBlockToGrid(shape, grid, x, y, rotation) {
  let gameOver = false
  const block = shapes[shape][rotation]
  const newGrid = [...grid]
  for (let row = 0; row < block.length; row++) {
    for (let col = 0; col < block[row].length; col++) {
      if (block[row][col]) {
        const yIndex = row + y
        /*
        If yIndex is less than 0, part of the block
         is off the top of the screen: game is over!
        */
        if (yIndex < 0) {
          gameOver = true
        } else {
          newGrid[row + y][col + x] = shape
        }
      }
    }
  }
  return { newGrid, gameOver }
}

export function checkRows(grid) {
  const points = [0, 40, 100, 300, 1200]
  let completedRows = 0
  for (let row = 0; row < grid.length; row++) {
    /*
    If there are no empty cells in a row,
    the row must be complete!
    */
    if (grid[row].indexOf(0) === -1) {
      completedRows += 1
      /*
      Remove the row and add one
      to the top of the grid
      */
      grid.splice(row, 1)
      grid.unshift(Array(10).fill(0))
    }
  }
  return points[completedRows]
}
