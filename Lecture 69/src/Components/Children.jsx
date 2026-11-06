import React, { memo } from 'react'

const Children = memo(function Children(prop) { 
    console.log(prop);   
    console.log("children component");
  return (
    <div>Children <br />
        <button onClick={prop.printHello}>click</button>
    </div>
  )
})



export default Children