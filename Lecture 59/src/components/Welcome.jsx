import React from 'react'

function Welcome({name = "guest"}) {
  return (
    <div>
        <p>{` welcome ${name}`}</p>
    </div>
  )
}

export default Welcome