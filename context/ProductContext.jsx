'use client'

import { createContext, useContext, useState } from "react"

const ProdcuctContext = createContext()
export default function ProductsProvider(props) {
    const { children } = props
    const [cart, setCart] = useState({})

    function handleIncrementProduct(price_id, num, data, noIncrement = false) {
        const newCart = {
            ...cart
        }
        if (price_id in cart) {
            //turns out the product is already in the cart so add/minus from the prev value
            // newCart[price_id] = newCart[price_id] + num
            newCart[price_id] = {
                ...data,
                quantity: noIncrement ? num : newCart[price_id]?.quantity + num
            }


        } else {
            //prodcut not yet in cart so add it
            newCart[price_id] = {
                ...data,
                quantity: num
            }
        }
        if (parseInt(newCart[price_id].quantity) <= 0) {
            //if newCart[price_id]=0 then we delete it
            delete newCart[price_id]
        }
        setCart(newCart)
    }


    const value = {
        cart,
        handleIncrementProduct,
        
    }


    return (
        <ProdcuctContext.Provider value={value}>
            {children}
        </ProdcuctContext.Provider>
    )
}
export const useProducts = () => useContext(ProdcuctContext)