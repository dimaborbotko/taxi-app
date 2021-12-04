import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./authorizationStates/authorizationState";
import loadReducer from './loadingScreenStates/loadingSlice'

export default configureStore({
    reducer: {
        authorization: authorizationReducer,
        load: loadReducer
    }
})