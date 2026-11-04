import React from 'react'
import withAuth from '../../utils/withAuth'

function Profile({name,age}) {
  return (
    <div>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
    </div>
  )
}

export let AuthProfile = withAuth(Profile)

// export default Profile