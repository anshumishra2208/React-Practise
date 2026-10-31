import React from 'react'
import { Link, Outlet } from "react-router"

function Navbar() {
    return (
        <div>

            <Link>Home</Link> <br />
            <Link to={"/about-us"}>About us</Link> <br />
            <Link to={"/login"}>Login</Link>
            <Outlet/>
        </div>
    )
}

export default Navbar