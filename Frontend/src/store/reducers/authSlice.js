import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authslice",
    initialState: { isloggedIn: false, showAuthModal: false, userDetails: {} },
    reducers: {
        openAuthModal(state) {
            state.showAuthModal = true
        },
        closeAuthModal(state) {
            state.showAuthModal = false
        },
        setUserDetails(state, action) {
            state.userDetails = action.payload
        },
        setUserLoggedIn(state) {
            state.isloggedIn = true
        },
        logOutUser(state) {
            state.isloggedIn = false
            state.userDetails = {}
        }

    }
})


//exports 
export default authSlice.reducer
export const {
    openAuthModal,
    closeAuthModal,
    setUserDetails,
    logOutUser,
    setUserLoggedIn
} = authSlice.actions