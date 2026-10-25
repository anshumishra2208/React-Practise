import React from 'react'

function Profile({user}) {
    const {name,age,city} = user;
  return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{city}</p>
    </div>
  )
}

export default Profile