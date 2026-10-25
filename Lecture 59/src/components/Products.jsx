import React from 'react'
import Product from './Product'

function Products({products = []}) {
  return (
    <div>
        <Product products={products}/>
    </div>
  )
}

export default Products