import React from 'react'
import { useCouter } from '../../hooks/useCouter'

import './counter.css'
export const CounterWithCustomHook = () => {

const {state, increment, decrement, reset} = useCouter(0);

  return (
    <>
        <h1>Cunter with Hook: { state } </h1>
        <hr/>
      <div className="d-flex gap-2 justify-content-md-start">
        <button onClick={()=> decrement(1)} type='button' className='btn btn-danger'> -1</button>
        <button onClick={ reset } type='button' className='btn btn-warning'> resetiar </button>
        <button onClick={()=> increment(1)} type='button' className='btn btn-success'> +1</button>
      </div>
    </>
  )
}
