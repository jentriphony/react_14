import classes from './Link.module.css'



const Link = dataProps => {



  return (

    <li className={ classes.link }>



      <a href={ dataProps.href }>
        { dataProps.innerText }
      </a>



    </li>

  )



}



export default Link