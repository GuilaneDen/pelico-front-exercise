import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export type Product =    {
    id: number,
    title: string,
    price:string,
    category:string,
    description:string,
    image:string
}

const ListProducts = () => {

    const [listProducts, setListProducts] = useState<Product[]>([])

    const navigate = useNavigate();

    const natigateToDetailView = () => {
        console.log("/session-timed-out");
        
        navigate(`prod.id`);

    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                setListProducts(json)
            })
    }, [])

    return (
        <div>
            {
                listProducts.map((prod:Product) => {
                    return (
                        <div key={prod.id}> 
                            <p>Title: {prod.title}</p>
                            <p>price: {prod.price}</p>
                            <p>category: {prod.category}</p>

                            <button onClick={() =>  navigate(`${prod.id}`)}>View details</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListProducts
