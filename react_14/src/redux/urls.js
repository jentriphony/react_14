import { createSlice } from '@reduxjs/toolkit'



const urlsSlice = createSlice({
  name: 'urls',
  initialState: {
    profileContent: { index: 'http://localhost:8000/api/profile-content' }
  },
  reducers: {}
})



export const urlsSliceReducer = urlsSlice.reducer

export const urlsSliceActions = urlsSlice.actions

export default urlsSlice