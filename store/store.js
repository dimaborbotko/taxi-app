import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./authorizationStates/authorizationState";

export default configureStore({
    reducer: {
        authorization: authorizationReducer
    }
})