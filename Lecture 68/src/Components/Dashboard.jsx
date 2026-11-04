import React from 'react'
import withAuth from '../../utils/withAuth'

function Dashboard({name}) {
  return (
    <div>
        <p>{`${name} is an authenticated user`}</p>
    </div>
  )
}

export let AuthDashboard = withAuth(Dashboard)