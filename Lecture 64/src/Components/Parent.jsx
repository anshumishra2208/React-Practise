import React from 'react'
import { Link, Outlet } from "react-router"


function Parent() {
    return (
        <div>
            <h1>Parent</h1>
            <Link to={"/first"}>First Child</Link><br />
            <Link to={"/second"}>Second Child</Link><br />
            <Link to={"/third"}>Third Child</Link>
            <Outlet/>


        </div>

    )
}

export default Parent