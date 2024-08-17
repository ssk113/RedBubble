import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: { orders: [] },
    reducers: {
        addOrder(state, action) {
            state.orders = action.payload
        },
        removeAllOrders(state) {
            state.orders = []
        }
    }
})

// exports
export default orderSlice.reducer
export const { addOrder, removeAllOrders } = orderSlice.actions