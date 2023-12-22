import React from "react";
import { useState } from "react";

const CounterBody = ({ count, onHandleAddition, onHandleSubtraction, onHandleReset }) => {
    return (
        <div>
            <h3>Count: {count}</h3>
            <button type="button" onClick={onHandleAddition}>+</button>
            <button type="button" onClick={onHandleReset}>reset</button>
            <button type="button" onClick={onHandleSubtraction}>-</button>
        </div>
    )
}

const ReactCounter = () => {
    const [count, setCount] = useState(0);

    const handleAddition = () => {
        setCount(count + 1);
    };

    const handleSubtraction = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    }

    return (
        <CounterBody
            count={count}
            onHandleAddition={handleAddition}
            onHandleSubtraction={handleSubtraction}
            onHandleReset={handleReset}
        />
    )
}

export default ReactCounter;