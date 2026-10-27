import React, { useState } from 'react'

function Test() {
    let [count, setCount] = useState(0);

    function increment() {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);

    }

    return (
        <div>
            <button onClick={increment}>click me to increse the value</button>
            <p>{count}</p>
        </div>
    )
}

export default Test