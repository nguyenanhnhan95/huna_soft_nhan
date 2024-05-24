import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../slice/product";
import { userSlice } from "../slice/user";
import { loginForm } from "../slice/login";
import { getAllCategoryMenus } from "../slice/productCategoty";
import overPlayMenuMainSlice from "../slice/main/overPlayMenu";
import menuContentMainSlice from "../slice/main/menuContentMain";

export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        user: userSlice.reducer,
        loginForm:loginForm.reducer,
        productCategoryMenus:getAllCategoryMenus.reducer,
        overPlayMenuMain: overPlayMenuMainSlice.reducer,
        menuContentMain:menuContentMainSlice.reducer,
    },
})
