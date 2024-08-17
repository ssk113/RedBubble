import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
    name: 'addressSlice',
    initialState: { addresses: [] },
    reducers: {
        addAdress(state, action) {
            state.addresses = action.payload
        }
    }
})


export default addressSlice.reducer
export const { addAdress } = addressSlice.actions