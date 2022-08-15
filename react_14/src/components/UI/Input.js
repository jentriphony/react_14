import classes from './Input.module.css'



const Input = dataProps => {



  return (

    <div className={ classes.control}>



      <label htmlFor={ dataProps.id }>
        { dataProps.label }
      </label>

      <input
        type={ dataProps.type }
        id={ dataProps.id }
        value={ dataProps.value }
        onInput={ dataProps.onInput }
      />



    </div>

  )



}



export default Input