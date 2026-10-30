
import React, { useState } from 'react'
import Useeffect from './Components/Useeffect'
import Timer from './Components/Timer'
import UseeffectArray from './Components/UseeffectArray'
import Interval from './Components/Interval'
import Products from './Components/Products'

function App() {
  const [showTimer, setShowTimer] = useState(true);
  const [showInterval, setShowInterval] = useState(true);

  return (
    <>
      {/* <Useeffect /> */}

      {/* {showTimer && <Timer/>}  
       
      <button onClick={() => {
        setShowTimer((prev)=>{
          return !prev
        })
      }} style={{ backgroundColor: "red" }}>Click to mount or unmount
      </button> */}

      {/* <UseeffectArray/> */}
      {/* {showInterval && <Interval />}
      <button onClick={() => {
        setShowInterval((prev) => {
          return !prev
        })
      }}> click to mount or unmount</button> */}

      <Products/>

    </>
  )
}

export default App