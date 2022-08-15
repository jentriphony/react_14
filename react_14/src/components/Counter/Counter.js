import classes from './Counter.module.css'

import {
  useState,
  useEffect,
  useRef
} from 'react'
// wrap class component with { connect }
import { useSelector, useDispatch } from 'react-redux'
import { counterSliceActions } from './../../redux/counter.js'
// import store from './../../redux/index.js'



const Counter = () => {
  
  
  
  const values = useSelector(store => store.counter)
  // doesn't subscribe
  // const values = store.getState().counter



  const dispatch = useDispatch()



  const [direction, setDirection] = useState(true)

  const [changeValue, setChangeValue] = useState(1)



  const changeValueRef = useRef()



  useEffect(() => {

    let timer = null
    !values.paused && (timer = setTimeout(() => direction ? dispatch(counterSliceActions.increment({ value: +changeValue })) : dispatch(counterSliceActions.decrement({ value: +changeValue })), 1024))

    return timer ? () => clearTimeout(timer) : () => null

  }, [values.paused, values.number, direction, changeValue])



  const directionHandler = () => {

    setDirection(previousDirection => !previousDirection)

  }

  const visibilityHandler = () => {

    dispatch(counterSliceActions.toggleVisibility())

  }

  const pauseHandler = () => {

    dispatch(counterSliceActions.togglePause())

  }

  const changeValueHandler = event => {

    event.preventDefault()

    setChangeValue(changeValueRef.current.value)

  }


  return (

    <main className={ classes.counter }>



      <h1>counter</h1>

      { values.visible && (
        <div className={ classes.value }>
          { values.number }
        </div>
      ) }

      <div>
        <button className={ classes.button } onClick={ directionHandler }>
          toggle direction
        </button>

        <button className={ classes.button } onClick={ visibilityHandler }>
          hide/show
        </button>

        <button className={ classes.button } onClick={ pauseHandler }>
          pause/resume
        </button>
      </div>

      <form className={ classes.form } onClick={ changeValueHandler }>
        <label htmlFor='increment-value'>
          increment by
        </label>

        <input
          type='number'
          id='increment-value'
          min='1'
          max='4'
          defaultValue='1'
          ref={ changeValueRef }
        />

        <button className={ classes.button } type='submit'>
          set
        </button>
      </form>



    </main>

  )



}



export default Counter



// import  { Component } from 'react'
// import { connect } from 'react-redux'



// class Counter extends Component {



//   constructor() {

//     super()
//     this.state = {
//       direction: true,
//       timer: null
//     }

//   }
  
  
  
//   toggleDirection() {

//     this.setState(previousState => {
//       return { direction: !previousState.direction }
//     })

//   }



//   tick() {

//     this.timer && clearTimeout(this.timer)
//     this.timer = setTimeout(() => this.state.direction ? this.props.increment() : this.props.decrement(), 1024)

//   }



//   componentDidUpdate() {

//     this.tick()

//   }



//   componentDidMount() {

//     this.tick()

//   }
  
  
  
//   render() {

//     return (

//       <main className={ classes.counter }>



//         <h1>counter</h1>

//         <div className={ classes.value }>
//           { this.props.number }
//         </div>

//         <button onClick={ this.toggleDirection.bind(this) }>
//           toggle direction
//         </button>



//       </main>

//     )

//   }



// }

// const storeDataProps = store => {

//   return { number: store.number }

// }

// const storeDispatchProps = storeDispatch => {

//   return {
//     increment: () => storeDispatch({ type: 'INCREMENT' }),
//     decrement: () => storeDispatch({ type: 'DECREMENT' })
//   }

// }



// export default connect(storeDataProps, storeDispatchProps)(Counter)