import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authSlice",
    initialState: { isLoggedIn: false, email: "" },
    reducers: {
        logInAdmin(state, action) {
            state.isLoggedIn = true,
                state.email = action.payload
        },
        logOutAdmin(state) {
            state.email = ""
            state.isLoggedIn = false
        }
    }
})


export const { logInAdmin, logOutAdmin } = authSlice.actions
export default authSlice.reducer