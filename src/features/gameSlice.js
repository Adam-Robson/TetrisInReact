import { createSlice } from '@reduxjs/toolkit'
import { defaultGameState } from '../utils'
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
    rotate: () => {

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
