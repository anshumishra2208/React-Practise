import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { AuthProfile } from './Components/Profile'
import useCounter from '../hooks/useCounter'

function App() {
  const [count, setCount] = useState(0)
  const {counter,increment,decrement} = useCounter();

  return (
    <>
    <AuthProfile name={"anshu"} age={19}/>

    <button onClick={increment}>click to increase </button><br />
    <p>{counter}</p>
    <button onClick={decrement}>click to decrease</button>
    </>
  )
}

export default App;
