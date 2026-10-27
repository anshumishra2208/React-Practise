import React, { useState } from 'react'

function Name() {

    const [nameInput,setNameInput] = useState("");
    const [name,setName] = useState("");

    const [ageInput,setAgeInput] = useState("");
    const [age,setAge] = useState("");

  return (
    <div>
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            setName(nameInput)
        }}>
            <input type="text" onChange={(e)=>{
                setNameInput(e.target.value)
            }}/>
        </form>

        <h4>{name}</h4>

        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            setName(ageInput)
        }}>
            <input type="text" onChange={(e)=>{
                setAgeInput(e.target.value)
            }}/>
        </form>

        <p>{age}</p>
    </div>
  )
  
}

export default Name