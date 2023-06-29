import { useState } from 'react'

import * as classes from './Counter.module.css'

const Counter = () => { 
  const [count, setCounter]  =  useState(0)

  return (
    <div>
      <button className={classes.counter} onClick={() => setCounter(count + 1)}> Count <b>{count}</b> </button>
    </div>
  )
}

export default Counter