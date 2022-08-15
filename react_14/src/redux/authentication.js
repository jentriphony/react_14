import { createSlice } from '@reduxjs/toolkit'



const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    authenticated: false,
    authenticating: false
  },
  reducers: {
    authenticating: previousSlice => {
      previousSlice.authenticating = true
    },
    login: (previousSlice, reducerProps) => {
      if(/.@./.test(reducerProps.payload.email.trim()) && reducerProps.payload.password.trim() !== ''){
        previousSlice.authenticated = true
        previousSlice.authenticating = false
      }
    },
    logout: previousSlice => {
      previousSlice.authenticated = false
    }
  }
})



export const authenticationSliceActions = authenticationSlice.actions

export const authenticationSliceReducer = authenticationSlice.reducer

export default authenticationSlice