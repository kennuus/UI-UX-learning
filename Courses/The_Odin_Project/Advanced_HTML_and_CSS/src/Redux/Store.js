import { configureStore } from '@reduxjs/toolkit'
import switcherReducer from './Reducer_Switcher'

export default configureStore({
  reducer: {
    theme: switcherReducer,
  },
})