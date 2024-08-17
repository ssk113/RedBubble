import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState: { categories: [] },
    reducers: {
        addCategory(state, action) {
            state.categories = action.payload
        }
    }
})

export default categorySlice.reducer
export const { addCategory } = categorySlice.actions