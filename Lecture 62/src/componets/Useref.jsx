import React, { useRef } from 'react'

function Useref() {

    const nameRef = useRef(null)

  return (
    <div>
        <form action="" onSubmit={(e)=>{
            e.preventDefault()
            console.log(nameRef.current.value);
        }}>
            <input type="text" ref={nameRef}/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Useref