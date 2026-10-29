import React from 'react'

function UncontrolledForm() {
  return (
    <div>
      <form action="" onSubmit={(e)=>{

        e.preventDefault();
        let formData = new FormData(e.target);
        console.log(Object.fromEntries(formData));

      }}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name='name'/>

        <label htmlFor="password">Password: </label>
        <input type="text" id="password" name='password'/>

        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name='email'/>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledForm