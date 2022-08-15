import { createContext } from 'react'



const Fetch = createContext(null)



export const FetchProvider = dataProps => {



  return (

    <Fetch.Provider
      value={ 
        async props => {
          try {
            const responce = await fetch(props.url, props.configuration)
            if(!responce.ok) {
              throw new Error('error_fetch')
            }
            const data = await responce.json()
            const responceDataTail = props.responceDataTail
            props.onSuccess(responceDataTail ? data[responceDataTail] : data)
          } catch(error) {
            return { error: error.message }
          }
        }
      }
    >



      { dataProps.children }



    </Fetch.Provider>

  )



}



export default Fetch