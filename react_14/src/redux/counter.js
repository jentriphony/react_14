import { createSlice } from '@reduxjs/toolkit'



const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    number: 0,
    visible: true,
    paused: true
  },
  reducers: {
    increment: (previousSlice, reducerProps) => {
      previousSlice.number += reducerProps.payload.value
    },
    decrement: (previousSlice, reducerProps) => {
      previousSlice.number -= reducerProps.payload.value
    },
    toggleVisibility: previousSlice => {
      previousSlice.visible = !previousSlice.visible
    },
    togglePause: previousSlice => {
      previousSlice.paused = !previousSlice.paused
    }
  }
})



export const counterSliceActions = counterSlice.actions

export const counterSliceReducer = counterSlice.reducer

export default counterSlice



// import { createStore } from 'redux'



// const counterReducer = (previousReducer = {
//   number: 0,
//   visible: true,
//   paused: true
// }, reducerProps) => {

//   const previousStateCopy = JSON.parse(JSON.stringify(previousReducer))
//   switch(reducerProps.type) {
//     case 'INCREMENT':
//       return {
//         ...previousStateCopy,
//         number: previousReducer.number + reducerProps.value
//       }
//     case 'DECREMENT':
//       return {
//         ...previousStateCopy,
//         number: previousReducer.number - reducerProps.value
//       }
//     case 'TOGGLE_VISIBILITY':
//       return {
//         ...previousStateCopy,
//         visible: !previousReducer.visible,
//       }
//     case 'TOGGLE_PAUSE':
//       return {
//         ...previousStateCopy,
//         paused: !previousReducer.paused
//       }
//     default:
//       return previousStateCopy
//   }

// }

// const counterStore = createStore(counterReducer)



// export default counterStore