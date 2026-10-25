import React from 'react'

function StudentList({students}) {
  return (
    <div>
        <ul>
            {
                students.map(({name,marks,city})=>{
                    return <div>
                        <p>{name}</p>
                        <p>{marks}</p>
                        <p>{city}</p>
                    </div>
                })
            }
        </ul>
    </div>
  )
}

export default StudentList