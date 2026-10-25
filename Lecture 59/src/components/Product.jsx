import React from 'react'

function Product({products}) {
  return (
    <div>
        <ul>
            {
                products.map(({title,price})=>{
                    return <div>
                        <li>{title}</li>
                        <li>{price}</li>
                    </div>
                })
            }
        </ul>
    </div>
  )
}

export default Product