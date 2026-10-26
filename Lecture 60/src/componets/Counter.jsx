import React, { useState } from 'react'

let count = 0;

function increment (){
    count++
}
function Counter() {
    const [value, setValue] = useState(0);

    return (
        <div>
            {/* <p onClick={increment}>+</p> */}
            <p onClick={() => setValue((prev) => prev + 1)}>+</p>
            <p>{value}</p>
            <p onClick={() => setValue((prev) => prev - 1)}>-</p>
        </div>
    )
}

export default Counter