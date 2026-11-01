import { use, useState } from 'react'
import { LanguageContext } from './Context/Language'

import './App.css'

import CartIcon from './Components/CartIcon'

function LanguageChange(){
  const {lang,setLang} = use(LanguageContext)
  return (
    <>
    <h1>{lang}</h1>
    <select name="" id="" onChange={(e)=>{
      setLang(e.target.value);
    }}>
      <option value="Hindi">Hindi</option>
      <option value="Spanish">Spanish</option>
      <option value="Russian">Russian</option>
      <option value="Chinese">Chinese</option>
    </select>
    </>
  )
}

function App() {
  return (
    <div>
      
      {/* <CartIcon/> */}

      <LanguageChange/>
      
    </div>
  )
}

export default App
