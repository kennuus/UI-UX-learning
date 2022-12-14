import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment, decrement, incrementByAmount } from '../redux/Counter'


export default function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="flex absolute top-[25px]">
        <h1> Count: {count}</h1>
      </div>
      <button onClick={() => dispatch(increment())}>
        + 1
      </button>
      <button onClick={() => dispatch(decrement())}>
        - 1
      </button>
    </div>
  )
}
