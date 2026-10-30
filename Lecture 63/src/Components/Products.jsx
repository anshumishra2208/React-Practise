import React, { useEffect, useState } from 'react'

function Products() {
    const [productCount, setProductCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState([])
    useEffect(() => {
        async function products() {
            let response = await fetch("https://dummyjson.com/products");
            let data = await response.json();
            console.log(data);
            setIsLoading(false);
            setProduct(data.products);
            setProductCount(data.total)
        }

        products();

    

    }, [])

    return (
        <div>
            {
                isLoading ? "Loading..." : <section>
            <h2>Total products: {productCount}</h2>
            <ul>
                {
                    product.map((p) => {
                        return <li key={p.id}>{p.title}</li>
                    })
                }
            </ul>
            </section>

            }

            
        </div>
    )
}

export default Products