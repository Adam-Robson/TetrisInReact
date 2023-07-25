import { createSlice } from '@reduxjs/toolkit'
import { defaultGameState, canMoveTo, nextRotation, addBlockToGrid, randomShapesIndex, checkRows } from '../utils/index'
export const gameSlice = createSlice({
  name: 'game',
  initialState: defaultGameState(),
  reducers: {
    pause: (state) => {
      state.isRunning = false
      return state
    },
    resume: (state) => {
      state.isRunning = true
      return state
    },
    moveLeft: (state) => {
      const { shape, grid, x, y, rotation } = state
      if (canMoveTo(shape, grid, x - 1, y, rotation)) {
        state.x = x - 1
      }
      return state
    },
    moveRight: (state) => {
      const { shape, grid, x, y, rotation } = state
      if (canMoveTo(shape, grid, x + 1, y, rotation)) {
        state.x = x + 1
      }
      return state
    },
    moveDown: (state) => {
      const { x, y, shape, grid, rotation, nextShape } = state
      const yCandidate = y + 1
      if (canMoveTo(shape, grid, x, yCandidate, rotation)) {
        state.y = yCandidate
        return state
      };

      const { newGrid, gameOver } = addBlockToGrid(shape, grid, x, y, rotation)
      if (gameOver) {
        state.gameOver = true
        return state
      }

      state.x = 3
      state.y = -4
      state.rotation = 0
      state.grid = newGrid
      state.shape = nextShape
      state.nextShape = randomShapesIndex()

      if (!canMoveTo(nextShape, newGrid, 0, 4, 0)) {
        console.log('Game is now over ;(')
        state.shape = 0
        state.gameOver = true
        return state
      }

      state.score += checkRows(newGrid)
      return state
    }
  },
  rotate: (state) => {
    const { shape, grid, x, y, rotation } = state
    const newRotation = nextRotation(shape, rotation)
    if (canMoveTo(shape, grid, x, y, newRotation)) {
      state.rotation = newRotation
    }
    return state
  },
  gameOver: () => {

  },
  restart: () => defaultGameState()
})

export const {
  pause,
  resume,
  moveLeft,
  moveRight,
  moveDown,
  rotate,
  gameOver,
  restart
} = gameSlice.actions

export default gameSlice.reducer
