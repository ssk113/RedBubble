import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
    name: 'offerSlice',
    initialState: { createdOffers: [], givenOffers: [] },
    reducers: {
        addCreatedOffer(state, action) {
            state.createdOffers = action.payload
        },
        addGivenOffer(state, action) {
            state.givenOffers = action.payload
        }
    }
})

export default offerSlice.reducer
export const { addCreatedOffer, addGivenOffer } = offerSlice.actions