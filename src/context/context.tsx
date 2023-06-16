import React, { createContext, useState } from 'react'
import { Product } from '../components/ListProducts'

type CartContextProps = {
    children: React.ReactNode
}

export type CartItem = {
    quantity: number
} & Product

type ContextCartType = {
    removeToCart: (id: Product["id"]) => void
}

const initiateContext: ContextCartType = {
    removeToCart: (id: Product["id"]) => undefined
}

export const Context = createContext<ContextCartType>(initiateContext)


export const CartContext = ({children} : CartContextProps) => {

    const [cartList, setCartList] = useState<CartItem[]>([])

    const removeToCart = (productId: Product["id"]) => {
        setCartList((prevState) => {
            prevState.reduce<CartItem[]>((prevCartList, currentCartItem) => {
                if(currentCartItem.id !== productId){
                    return [...prevCartList, currentCartItem]
                }

                if(currentCartItem.quantity >1){
                    currentCartItem.quantity -=1;
                    return [...prevCartList, currentCartItem]
                }

                return prevCartList
            }, []);
            
            return [...prevState]
        })
    }

    return (
        <Context.Provider value={{removeToCart}}>
            {children}
        </Context.Provider>
    )
}