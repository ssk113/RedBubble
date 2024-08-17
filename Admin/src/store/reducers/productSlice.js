import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: { products: [], productTypes: [] },
    reducers: {
        addProduct(state, action) {
            state.products = action.payload
        },
        addProductType(state, action) {
            state.productTypes = action.payload
        }
    }
})


//export
export const { addProduct, addProductType } = productSlice.actions
export default productSlice.reducer