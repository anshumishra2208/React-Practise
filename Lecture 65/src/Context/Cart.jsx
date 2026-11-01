import { createContext, useState } from "react";

export let CartCount = createContext(null);
export function CartContext({children}){
    const [count,setCount] = useState(0);
    return <CartCount value={{count,setCount}}>{children}</CartCount>
}