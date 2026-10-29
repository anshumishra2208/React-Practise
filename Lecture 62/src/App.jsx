
import React from 'react'
import Controlled from './componets/Controlled'
import Uncontrolled from './componets/Uncontrolled'
import ControlledForm from './componets/ControlledForm'
import DynamicHeading from './componets/DynamicHeading'

function App() {
  return (
    <div>
      {/* <Controlled/>
      <Uncontrolled/> */}

      <ControlledForm/>
      <DynamicHeading/>
    </div>
  )
}

export default App