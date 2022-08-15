import classes from './Header.module.css'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authenticationSliceActions } from './../../../redux/authentication'
import { headerSliceActions } from './../../../redux/header'
import { Fragment } from 'react'
// import Dropdown from './Navigation/Dropdown/Dropdown'



const Header = () => {



  const [navigationDropdownMenuVisibility, setNavigationDropdownMenuVisibility] = useState(false)



  const authenticationValues = useSelector(store => store.authentication)

  const theme = useSelector(store => store.header.theme)



  const dispatch = useDispatch()



  const navigationDropdownMenuVisibilityHandler = () => {

    setNavigationDropdownMenuVisibility(previousNavigationDropdownMenuVisibility => !previousNavigationDropdownMenuVisibility)

  }

  const authenticationButtonHandler = () => {

    authenticationValues.authenticated ? dispatch(authenticationSliceActions.logout()) : dispatch(authenticationSliceActions.authenticating())

  }

  const themeHandler = () => {

    dispatch(headerSliceActions.themeHandler())

  }

  if(theme === 'light') {
    document.body.style.background = 'rgba(255, 255, 255, 0.8)'
    document.body.style.color = 'rgba(0, 0, 0, 0.8)'
  } else {
    document.body.style.background = 'rgba(0, 0, 0, 0.8)'
    document.body.style.color = 'rgba(255, 255, 255, 0.8)'
  }

  const authenticationButtonInnerText = authenticationValues.authenticated ? 'logout' : 'login'

  const navigation = (
    <Fragment>
      { authenticationValues.authenticated && (
        <Fragment>
          <li>
            <a href='localhost:8000/page_1'>
              page_1
            </a>
          </li>

          <li>
            <a href='localhost:8000/page_2'>
              page_2
            </a>
          </li>
        </Fragment>
      ) }

      <li>
        <button type='button' onClick={ authenticationButtonHandler }>
          { authenticationButtonInnerText }
        </button>
      </li>
    </Fragment>
  )
  
  
  return (

    <header className={ classes.header }>


      <h1>
        <button type='button' onClick={ themeHandler }>
          header
        </button>
      </h1>

      <nav>
        <div className={ classes['navigation-dropdown'] }>
          <button
            className={ classes['navigation-button'] }
            type='button'
            onClick={ navigationDropdownMenuVisibilityHandler }
          >
            ...
          </button>

          { navigationDropdownMenuVisibility && (
            <ul>
              { navigation }
            </ul>
          ) }
        </div>

        <ul className={ classes.navigation }>
          { navigation }
        </ul>
      </nav>



    </header>

  )



}



export default Header