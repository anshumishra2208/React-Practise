import React from 'react'
import { useParams } from "react-router"

function ProductPage({prop}) {
    const {id} = useParams()
    const data = prop.find((p)=> p.id===Number(id))
    console.log(data);

    return (
        <div>
            {
                data ? `${data.title}` : "Movie not found"
            }
        </div>
    )
}

export default ProductPage