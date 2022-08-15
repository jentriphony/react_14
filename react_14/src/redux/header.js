import { createSlice } from '@reduxjs/toolkit'



const headerSlice = createSlice({
  name: 'header',
  initialState: { theme: 'light' },
  reducers: {
    themeHandler: previousSlice => {
      if(previousSlice.theme === 'light') {
        previousSlice.theme = 'dark'
        return
      }
      previousSlice.theme = 'light'
    }
  }
})



export const headerSliceReducer = headerSlice.reducer

export const headerSliceActions = headerSlice.actions

export default headerSlice