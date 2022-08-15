// import { createSlice } from '@reduxjs/toolkit'



// const fetchSlice = createSlice({
//   name: 'fetch',
//   initialState: {},
//   reducers: {
//     default: async (previousSlice, reducerProps) => {
//       try {
//         const responce = await fetch(reducerProps.payload.url, reducerProps.payload.configuration)
//         if(!responce.ok) {
//           throw new Error('error_fetch')
//         }
//         const data = await responce.json()
//         const responceDataTail = reducerProps.payload.responceDataTail
//         reducerProps.payload.onSuccess(responceDataTail ? data[responceDataTail] : data)
//       } catch(error) {
//         return { error: error.message }
//       }
//     }
//   }
// })



// export const fetchSliceReducer = fetchSlice.reducer

// export const fetchSliceActions = fetchSlice.actions

// export default fetchSlice