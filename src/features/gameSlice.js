import { createSlice } from '@reduxjs/toolkit'
import { defaultGameState, canMoveTo, nextRotation } from '../utils'
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
    moveDown: () => {

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
    restart: () => {

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
