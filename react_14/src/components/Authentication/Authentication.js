import classes from './Authentication.module.css'

import useInput from './../../hooks/input'
import { useDispatch } from 'react-redux'
import { authenticationSliceActions } from './../../redux/authentication'
import Input from './../UI/Input'



const Authentication = () => {



  const [
    email,
    password
  ] = [
    useInput(),
    useInput()
  ]



  const dispatch = useDispatch()


  
  const submitHandler = event => {

    event.preventDefault()

    dispatch(authenticationSliceActions.login({
      email: email.value,
      password: password.value
    }))

  }

  
  
  return (

    <main className={ classes.authentication}>



      <section>
        <form onSubmit={ submitHandler }>
          <Input
            label='email'
            type='email'
            id='email'
            value={ email.value }
            onInput={ email.inputHandler }
          />

          <Input
            label='password'
            type='password'
            id='password'
            value={ password.value }
            onInput={ password.inputHandler }
          />

          <button type='submit'>
            login
          </button>
        </form>
      </section>



    </main>

  )



}



export default Authentication