import React, { useRef } from 'react'

function Focus() {

    const inputRef = useRef(null);

  return (
    <div>
        <form action="" onSubmit={(e)=>{
                e.preventDefault();
                inputRef.current.focus()
            }}>
            <input type="text" ref={inputRef}/>
            <button >click to focus</button>
        </form>
    </div>
  )
}

export default Focus