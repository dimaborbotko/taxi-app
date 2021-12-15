import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slice/navSlice";
import typeCarReducer from './slice/typeCar'
import userCurrentReducer  from "./slice/userSlice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
        type: typeCarReducer,
        user: userCurrentReducer
    },
})