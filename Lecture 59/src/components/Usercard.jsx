import React from 'react'

const user = {
    name : "anshu",
    profession : "employee"
}

function Usercard() {
  return (
    <div>
        <p>{user.name}</p>
        <p>{user.profession}</p>
    </div>
  )
}

export default Usercard