import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth.slice";
import product from "./product.slice";


export const store = configureStore({
    reducer: {
        auth,
        product,
    },
});
