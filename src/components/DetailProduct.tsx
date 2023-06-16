import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from './ListProducts'
import { CartItem, Context } from '../context/context';

const DetailProduct = () => {

    const { productId } = useParams();
    const { removeToCart } = useContext(Context)
    const [product, setProduct] = useState<Product>()


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=> setProduct(json))
        
    }, [])

    return (
            product ?
            (
                <div key={product.id}> 
                    <p>Title: {product.title}</p>
                    <p>price: {product.price}</p>
                    <p>category: {product.category}</p>
                    
                    <button onClick={() => removeToCart(product.id)}> Remove to cart </button>
                </div>
            ) : <div></div>
    )
}

export default DetailProduct
