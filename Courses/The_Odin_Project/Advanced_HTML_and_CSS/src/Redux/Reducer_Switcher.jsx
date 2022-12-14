import {createSlice} from '@reduxjs/toolkit'
import { useRef } from 'react'

export const switcher = createSlice({
  name : 'Theme switcher',
  initialState: {
    darkIcon: useRef(),
    lightIcon: useRef()
  },
  reducers: {
  }
})

export const {} = switcher.actions

export default switcher.reducer