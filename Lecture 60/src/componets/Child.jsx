import React from 'react'

function Child({child}) {
  return (
    <div>
        {child(8)}
    </div>
  )
}

export default Child