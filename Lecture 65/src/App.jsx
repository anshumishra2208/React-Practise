import { use, useState } from 'react'
import { UserContext } from "./main"

import './App.css'
import Navbar from './Components/Navbar'
import ChangeTheme from './Components/ChangeTheme'

function App() {
  const username = use(UserContext)
  return (
    <div>
      {/* <p>{username}</p> */}
      <Navbar/>
      <ChangeTheme/>
    </div>
  )
}

export default App
