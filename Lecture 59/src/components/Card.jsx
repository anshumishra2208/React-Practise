import React from 'react'
import { Header } from './Componets'

function Card({children}) {
  return (
    <div>
        {
            <p>{children}</p>
        }

        <Header/>
        
    </div>
  )
}

export default Card