import React, { use } from 'react'
import { PersonContext } from '../Context/BookContext'

function BookContext() {
    const book = use(PersonContext)
    return (
        <div>
            <h1>{book}</h1>
        </div>
    )
}

export default BookContext