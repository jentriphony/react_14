import { configureStore } from '@reduxjs/toolkit'
import { urlsSliceReducer } from './urls'
import { headerSliceReducer } from './header'
import { authenticationSliceReducer } from './authentication'
import { counterSliceReducer } from './counter'



const store = configureStore({
  reducer: {
    urls: urlsSliceReducer,
    header: headerSliceReducer,
    authentication: authenticationSliceReducer,
    counter: counterSliceReducer
  }
})



export default store