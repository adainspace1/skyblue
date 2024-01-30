import React from "react"
import {useSelector, useDispatch} from "react-redux"
import { increment } from "../store/slice/counterSlice"

export function CounterApp(){
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <span>{count}</span>
        </div>
    );
}