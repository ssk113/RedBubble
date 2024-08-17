import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: { open: false },
    reducers: {
        setSideBarOpen(state) {
            state.open = true
        },
        setSideBarClose(state) {
            state.open = false
        }
    }
})

export default sidebarSlice.reducer
export const { setSideBarClose, setSideBarOpen } = sidebarSlice.actions