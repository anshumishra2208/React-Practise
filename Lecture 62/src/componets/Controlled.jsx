import { useState } from 'react'


function Controlled() {

  const [form, setForm] = useState({ name: "", Email: "", Password: "" })

  return (

    <>
      <form action="" onSubmit={(e) => {
        e.preventDefault();
        console.log(form);
      }}>
        <label htmlFor="">Name: </label>
        <input type="text" name="name" id="name" onChange={(e)=>{
          setForm((prev)=>({...prev,[e.target.name]:e.target.value}))
        }}/>

        <label htmlFor="">Email: </label>
        <input type="text" name="Email" id="Email" onChange={(e)=>{
          setForm((prev)=>({...prev,[e.target.name]:e.target.value}))
        }} />

        <label htmlFor="">Password: </label>
        <input type="Password" name="Password" id="Password" onChange={(e)=>{
          setForm((prev)=>({...prev,[e.target.name]:e.target.value}))
        }} />
        <button>submit</button>

      </form>

      <p>{form.name}</p>
      <p>{form.Email}</p>
      <p>{form.Password}</p>
    </>

  )
}

export default Controlled
