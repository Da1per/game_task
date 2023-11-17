import { configureStore } from '@reduxjs/toolkit'
import reduceSlice from "./reduceSlice"

const store = configureStore({
  reducer: {
    reduceSlice:reduceSlice
  },
})

export default store