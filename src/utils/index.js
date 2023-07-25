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
  // Loop through all rows and cols of the **shape**
  for (let row = 0; row < currentShape.length; row++) {
    for (let col = 0; col < currentShape[row].length; col++) {
      // Look for a 1 here
      if (currentShape[row][col] !== 0) {
        // x offset on the grid
        const proposedX = col + x
        // y offset on the grid
        const proposedY = row + y
        if (proposedY < 0) {
          continue
        }
        // Get the row on the grid
        const possibleRow = grid[proposedY]
        // Check row exists
        if (possibleRow) {
          // Check if this column in the row is undefined if it's off the edges, 0, and empty
          if (possibleRow[proposedX] === undefined || possibleRow[proposedX] !== 0) {
            // undefined or not 0 and it's occupied we can't move here.
            return false
          }
        } else {
          return false
        }
      }
    }
  }
  return true
}
