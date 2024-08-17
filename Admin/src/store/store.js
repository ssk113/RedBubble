import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./reducers/sidebarSlice";
import categorySlice from "./reducers/categorySlice";
import productSlice from "./reducers/productSlice";
import offerSlice from "./reducers/offerSlice";
import userSlice from "./reducers/userSlice";
import authSlice from "./reducers/authSlice";
const store = configureStore({
    reducer: {
        authSlice,
        sideBarSlice: sidebarSlice,
        categorySlice,
        productSlice,
        offerSlice,
        userSlice
    }
})

export default store 