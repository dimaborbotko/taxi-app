import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slice/navSlice";
import typeCarReducer from './slice/typeCar'

export const store = configureStore({
    reducer: {
        nav: navReducer,
        type: typeCarReducer,
    },
})