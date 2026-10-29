import React, { useState } from 'react'

function DynamicHeading() {
    const [name,setName] = useState("")
    const [heading,setHeading] = useState("");
  return (

    <div>
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            setHeading(`hello ${name}`)
        }}>
        <input type="text" onInput={(e)=>{
            setName(e.target.value);
        }}/>

        <button>submit</button>

        </form>

        <p>{heading}</p>
    </div>
  )
}

export default DynamicHeading