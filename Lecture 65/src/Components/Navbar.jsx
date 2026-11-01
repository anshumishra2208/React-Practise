import React, { use } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

function Navbar() {
    const {theme} = use(ThemeContext);
  return (
    <div>
        <h1>{theme}</h1>
    </div>
  )
}

export default Navbar