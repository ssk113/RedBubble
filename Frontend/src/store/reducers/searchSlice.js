import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: { searchString: '' },
    reducers: {
        setSearchString(state, action) {
            state.searchString = action.payload
        }
    }
})


export default searchSlice.reducer
export const { setSearchString } = searchSlice.actions