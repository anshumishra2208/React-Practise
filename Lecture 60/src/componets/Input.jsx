import React, { useState } from 'react'



function Input() {

    function input(e){
    setStr(e.target.value)
}
    const [str,setStr] = useState("");
  return (
    <div>
        <input type="text" onChange={input}/>
        <p>{str}</p>
        
    </div>
  )
}

export default Input