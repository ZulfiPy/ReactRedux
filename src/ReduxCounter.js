import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementBy, selectCount } from "./features/counterSlice";

const ReduxCounter = () => {
    const [ incrementVal, setIncrementVal ] = useState(0);

    const handleNumberInput = (e) => setIncrementVal(e.target.value);

    const value = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <>
            <h3>count: {value}</h3>
            <button type="button" onClick={() => dispatch(increment())}>increment</button>
            <button type="button" onClick={() => dispatch(reset())}>reset</button>
            <button type="button" onClick={() => dispatch(decrement())}>decrement</button>

            <input type="number" onChange={(e) => handleNumberInput(e)}/>
            <button type="button" onClick={() => dispatch(incrementBy(Number(incrementVal)))}>increment by</button>
        </>
    )
}

export default ReduxCounter;