import React, { useState } from 'react'

function Form() {
    const [name,setName] = useState("");
    const [inputValue,setInputValue] = useState("")
  return (
    <div>
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            setName(inputValue);
        }}>
            <input type="text" onChange={(e)=>{
                setInputValue(e.target.value)
            }}/>
            <button></button>
        </form>
        <p>{name}</p>
    </div>
  )
}

export default Form