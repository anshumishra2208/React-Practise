import { useEffect, useState } from "react";
function Useeffect() {

  const [productCount, setProductCount] = useState(0)
  const [isLoading, setIsLoading] = useState("Loading...")
  const [name, setName] = useState("")

  useEffect(() => {

    async function getProducts() {
      let res = await fetch("https://dummyjson.com/products")
      let data = await res.json();
      setIsLoading("");
      setProductCount(data.total)
      console.log(data);
    }

    getProducts()

  }, [name])

  return (
    <>
      <p>{isLoading}</p>
      <h2>{productCount}</h2>
      <input type="text" onInput={(e) => {
        setName(e.target.value)
      }} />
    </>
  )
}

export default Useeffect
