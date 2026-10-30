import React, { useEffect, useState } from 'react'

function UseeffectArray() {

    const [password,setPassword] = useState("")

    useEffect(() => {
        console.log("UseEffect");
    },[password])

    return (
        <div>
            <input type="text" onInput={(e)=>{
                console.log("state updation");
                setPassword(e.target.value);
            }}/>
        </div>
    )
}

export default UseeffectArray