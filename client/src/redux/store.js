import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import adminProductReducer from "./adminSlice";
import shopProductReducer from "./shopSlice";

const store = configureStore({
    reducer : {
        authReducer,
        adminProductReducer,
        shopProductReducer
    }
});

export default store;