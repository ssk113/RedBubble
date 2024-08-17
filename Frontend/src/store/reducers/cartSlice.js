import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartslice',
    initialState: { cartItems: {} },
    reducers: {
        setCartItem(state, action) {
            state.cartItems = action.payload
        },
        setCartEmpty(state) {
            state.cartItems = {}
        }
    }
})

//exports 
export const { setCartItem, setCartEmpty } = cartSlice.actions
export default cartSlice.reducer