import { createSlice } from '@reduxjs/toolkit'
import {
  defaultGameState,
  canMoveTo,
  nextRotation,
  addBlockToGrid,
  randomShapesIndex,
  checkRows
} from '../utils/index'

export const gameSlice = createSlice({
  name: 'game',
  initialState: defaultGameState(),
  reducers: {

    /** PAUSE */
    pause: (state) => {
      state.isRunning = false
      return state
    },

    /** RESUME */
    resume: (state) => {
      state.isRunning = true
      return state
    },

    /** MOVE LEFT */
    moveLeft: (state) => {
      const { shape, grid, x, y, rotation } = state
      if (canMoveTo(shape, grid, x - 1, y, rotation)) {
        state.x = x - 1
      }
      return state
    },

    /** MOVE RIGHT */
    moveRight: (state) => {
      const { shape, grid, x, y, rotation } = state
      if (canMoveTo(shape, grid, x + 1, y, rotation)) {
        state.x = x + 1
      }
      return state
    },

    /** MOVE DOWN */
    moveDown: (state) => {
      const { shape, grid, x, y, rotation, nextShape } = state
      const yCandidate = y + 1

      if (canMoveTo(shape, grid, x, yCandidate, rotation)) {
        state.y = yCandidate
      }

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
        state.shape = 0
        state.gameOver = true
        return state
      }

      state.score += checkRows(newGrid)

      return state
    },

    /** ROTATE */
    rotate: (state) => {
      const { shape, grid, x, y, rotation } = state
      const newRotation = nextRotation(shape, rotation)

      if (canMoveTo(shape, grid, x, y, newRotation)) {
        state.rotation = newRotation
      }
      return state
    },

    /** GAME OVER */
    gameOver: (state) => {
      state.gameOver = true
      return state
    },

    /** RESTART */
    restart: (state) => {
      state.restart = defaultGameState()
      return state
    }
  }
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
