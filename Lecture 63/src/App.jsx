
import React, { useState } from 'react'
import Useeffect from './Components/Useeffect'
import Timer from './Components/Timer'

function App() {
  const [showTimer, setShowTimer] = useState(true)
  return (
    <>
      {/* <Useeffect /> */}
       
       {showTimer && <Timer/>}  
       
      <button onClick={() => {
        setShowTimer((prev)=>{
          return !prev
        })
      }} style={{ backgroundColor: "red" }}>Click to mount or unmount</button>
    </>
  )
}

export default App