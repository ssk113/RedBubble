import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "categoryslice",
    initialState: {
        categories: [],
        subCategories: [],
        loader: false
    },
    reducers: {
        addcategory(state, action) {
            state.categories = action.payload
        },
        addSubCategory(state, action) {
            state.subCategories = action.payload
        },
        makeLoaderTrue(state) {
            state.loader = true
        },
        makeLoaderFalse(state) {
            state.loader = false
        }
    }
})

//exports
export default categorySlice.reducer
export const { addcategory, makeLoaderTrue, makeLoaderFalse, addSubCategory } = categorySlice.actions