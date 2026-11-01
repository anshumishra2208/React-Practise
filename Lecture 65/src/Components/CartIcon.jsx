import React, { use } from 'react'
import { CartCount } from '../Context/Cart'

function CartIcon() {
    const {count,setCount} = use(CartCount)
  return (
    <div>

        <h1>{count}</h1>
        <button onClick={(e)=>{
            setCount((prev)=> prev + 1)
        }}>Click to increase the cart count</button>
    </div>
  )
}

export default CartIcon