import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products_slice',
    initialState: { products: [] },
    reducers: {
        getProducts(state, action) {
            state.products = action.payload
        }
    }
})

export default productSlice.reducer
export const { getProducts } = productSlice.actions