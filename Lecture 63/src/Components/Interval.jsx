import React, { useState } from 'react'
import { useEffect } from 'react'

function Interval() {


    useEffect(() => {
        const id = setInterval(() => {
            console.log("set interval running");
        }, 1000);

        return () => {
            clearInterval(id)
        }
    })



    return (
        <div>
            <h2>Interval Components</h2>
            
        </div>
    )
}

export default Interval