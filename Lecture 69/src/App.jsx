import { useMemo, useState } from "react";


function App() {

  const [counter, setCounter] = useState(0);

   function totalSum() {
    let sum = 0;
    for (let i = 0; i <= 1000000000; i++) {
      sum += i;
    }
    return sum;
  }

  let value = useMemo(()=>{
    return totalSum()
  },[])


  return (
    <>
      <p>value : {counter}</p>
      <button onClick={() => {
        setCounter((prev) => prev + 1)
      }}>Click to increase</button>
      <p>{value}</p>


    </>

  )
}

export default App
