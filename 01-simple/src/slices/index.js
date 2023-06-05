import { configureStore } from "@reduxjs/toolkit";
import loginSliceReducer from "./loginSlice";

export default configureStore({
    reducer: {
        loginSliceReducer,
    }
})