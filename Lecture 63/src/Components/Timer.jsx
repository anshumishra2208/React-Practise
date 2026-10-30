import React, { useEffect, useState } from 'react'

function Timer() {

    const [email, setEmail] = useState("");

    useEffect(() => {
        const id = setInterval(() => {
            console.log("timer running");
        }, 1000);

        return function cleanUp() {
            clearInterval(id)
            console.log("clean up function");
        }

    }, [email])


    return (
        <>
            <h1>Timer</h1>
            <input type="text" onInput={(e) => {
                setEmail(e.target.value)
            }} />

        </>
    )
}

export default Timer