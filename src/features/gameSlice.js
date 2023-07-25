import { createSlice } from '@reduxjs/toolkit'
import { defaultGameState, canMoveTo, nextRotation } from '../utils'
export const gameSlice = createSlice({
  name: 'game',
  initialState: defaultGameState(),
  reducers: {
    pause: () => {

    },
    resume: () => {

    },
    moveLeft: () => {

    },
    moveRight: () => {

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

export const isRunningRef = state => state.isRunning
export const gameOverRef = state => state.gameOver
export const scoreRef = state => state.score

export default gameSlice.reducer
