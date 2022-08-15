import { useSelector } from 'react-redux'
import { Fragment } from 'react'
import Header from './components/Layout/Header/Header'
import Authentication from './components/Authentication/Authentication'
import Profile from './components/Profile/Profile'
import Counter from './components/Counter/Counter'



function App() {



  const authenticationSlice = useSelector(store => store.authentication)
  
  
  return (

    <Fragment>



      <Header />

      { !authenticationSlice.authenticated && authenticationSlice.authenticating && (
        <Authentication />
      ) }

      { authenticationSlice.authenticated && !authenticationSlice.authenticating && (
        <Profile />
      ) }

      <Counter />



    </Fragment>

  )



}

export default App
