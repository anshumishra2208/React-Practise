import { useState } from "react"
import Child from "./componets/Child"
import Counter from "./componets/Counter"
import Form from "./componets/Form"
import Input from "./componets/Input"
import Todo from "./componets/Todo"
import Name from "./componets/Name"
import Test from "./componets/Test"


function App() {
  const [value,setValue] = useState(0)

function child(val){
  setValue(val);
}

  return (
   <>
   <Counter/>
   <Input/>
   <Form/>
   <Todo/>
   <Child child={child}/>
   <p>{value}</p>
   <Name/>
   <Test/>

   </>
  )
}

export default App
