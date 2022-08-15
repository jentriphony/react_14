import classes from './Profile.module.css'

import {
  useState,
  useContext,
  useEffect
} from 'react'
import { useSelector } from 'react-redux'
import FetchContext from './../../context/fetch'
import Navigation from './Navigation/Navigation'
import Card from './../UI/Card'



const Profile = () => {



  const [contents, setContents] = useState(null)



  const indexUrl = useSelector(store => store.urls.profileContent.index)



  const fetchHandler = useContext(FetchContext)



  useEffect(() => {

    fetchHandler({
      url: indexUrl,
      responceDataTail: 'data',
      onSuccess: setContents
    })

  }, [indexUrl, fetchHandler])



  const contents_ = contents ? (
    <ul>
      { contents.map(content => (
        <Card key={ content.id }>
          { content.content }
        </Card>
      )) }
    </ul>
  ) : null
  
  
  return (

    <section className={ classes.profile }>
      


      <div className={ classes.delimeter }></div>

      <h2 className={ classes.title }>
        profile
      </h2>

      <div className={ classes.delimeter }></div>

      <section className={ classes.body }>
        <Navigation />

        <main>
          { contents_ }
        </main>
      </section>



    </section>

  )



}



export default Profile