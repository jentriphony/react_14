import { useState } from 'react'



const useInput = () => {



  const [value, setValue] = useState('')



  const inputHandler = event => {

    setValue(event.target.value)

  }

  const reset = () => {

    setValue('')

  }


  return {
    value,
    inputHandler,
    reset
  }



}



export default useInput