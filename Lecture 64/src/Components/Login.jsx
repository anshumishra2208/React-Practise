import React from 'react'
import { useNavigate } from "react-router"

function Login() {

    const navigate = useNavigate();
    
    function handle(e) {
        e.preventDefault();
        navigate("/dashboard")
    }
    return (
        <div>
            <form action="" onSubmit={handle}>
                <label htmlFor="name"></label>
                <input type="text" name='name' id='name' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login