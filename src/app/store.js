import { configureStore } from '@reduxjs/toolkit'
/* Reducers: functions that receive a
state object, make changes to it and
then return an updated state object. */
import gameReducer from '../features/gameSlice'

export const store = configureStore({
  reducer: gameReducer
})
