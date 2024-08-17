import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
    name: "offerSlice",
    initialState: { offers: [] },
    reducers: {
        addOffers(state, action) {
            state.offers = action.payload
        },
        setOffersEmpty(state) {
            state.offers = []
        }
    }
})


export const { addOffers, setOffersEmpty } = offerSlice.actions
export default offerSlice.reducer