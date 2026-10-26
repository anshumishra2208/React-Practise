import React, { useState } from 'react'

function Todo() {
    const [todo,setTodo] = useState(["learn html" , "learn css"])
    const [input,setinput] = useState("");
  return (
    <div>
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            if(!input){
                return
            }
            setTodo((prev)=> [...prev,input]);
        }}>
            <input type="text" name="" id="" onChange={(e)=>{
                setinput(e.target.value);
            }}/>
            <button></button>
        </form>

        <ul>
            {
                todo.map((s)=>{
                    return <li>{s}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Todo