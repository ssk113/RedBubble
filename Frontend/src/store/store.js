import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import categorySlice from "./reducers/categorySlice";
import authSlice from "./reducers/authSlice";
import cartSlice from "./reducers/cartSlice";
import addressSlice from "./reducers/addressSlice";
import offerSlice from "./reducers/offerSlice";
import orderSlice from "./reducers/orderSlice";
import searchSlice from "./reducers/searchSlice";
const store = configureStore({
    reducer: {
        productSlice,
        categorySlice,
        authSlice,
        cartSlice,
        addressSlice,
        offerSlice,
        orderSlice,
        searchSlice
    }
})


export default store