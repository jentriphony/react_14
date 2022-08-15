import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { FetchProvider } from './context/fetch'
import { Provider } from 'react-redux'
import store from './redux/index'
import App from './App'



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  
  // <React.StrictMode>


    <FetchProvider>
      <Provider store={ store }>
        <App />
      </Provider>
    </FetchProvider>


    
  // </React.StrictMode>
  
)