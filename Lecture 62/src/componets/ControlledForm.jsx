import React, { useState } from 'react'

function ControlledForm() {

    const [form, setForm] = useState({ name: "", email: "", password: "" })
    return (

        <div>
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                console.log(form);
            }}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name='name' onInput={(e) => {
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                }} />

                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name='email' onInput={(e) => {
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                }} />

                <label htmlFor="password">Password: </label>
                <input type="text" id="password" name='password' onInput={(e) => {
                    setForm((prev) => ({ ...prev, password: e.target.value }))
                }} />

                <button>submit</button>

            </form>

        </div>
    )
}

export default ControlledForm