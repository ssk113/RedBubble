import toast from "react-hot-toast"
import { addToCart, increaseCartQuantity, decreaseCartQuantity } from "../../api/agent"
import { setCartItem } from "../reducers/cartSlice"



// add to cart action 
export const addToCartAction = (cartData, setQuantity) => {
    return async (dispatch, getState) => {
        const token = localStorage.getItem('token')
        if (!token) {
            toast.error("Login Again !")
            return
        }
        try {
            const { data } = await addToCart(cartData, token)
            const newCartItems = {}
            newCartItems[data.productTypeId] = { ...data }
            const oldCartItems = getState().cartSlice.cartItems
            const allCartItems = { ...oldCartItems, ...newCartItems }
            dispatch(setCartItem(allCartItems))

        } catch (err) {
            toast.error(err.response.data.message)
        }

    }
}


// to increase qunatity on any specific product 
export const increaseQuantityAction = (cartData) => {
    const { productTypeId } = cartData
    return async (dispatch, getState) => {
        const token = localStorage.getItem('token')
        if (!token) {
            toast.error("Login Again")
            return
        }

        try {
            const { data } = await increaseCartQuantity(cartData, token)
            if (data) {
                const oldCartItems = getState().cartSlice.cartItems
                const clone = structuredClone(oldCartItems)
                clone[productTypeId].quantity = data.quantity
                dispatch(setCartItem(clone))
            }
        } catch (err) {
            toast.error("error while increasing quantity")
        }
    }
}


// to decrease quantity on any specific product
export const decreaseQuantityAction = (cartData) => {
    const { productTypeId } = cartData
    return async (dispatch, getState) => {
        const token = localStorage.getItem('token')
        if (!token) {
            toast.error("Login Again !")
            return
        }
        try {
            const { data } = await decreaseCartQuantity(cartData, token)
            const oldCartItems = getState().cartSlice.cartItems
            if (data.quantity >= 1) {
                const clone = structuredClone(oldCartItems)
                clone[productTypeId].quantity = data.quantity

                dispatch(setCartItem(clone))
            }
            else {
                const clone = { ...oldCartItems };
                delete clone[productTypeId];
                dispatch(setCartItem(clone));
            }

        } catch (err) {
            console.log(err)
            toast.error("error")
        }



    }
}