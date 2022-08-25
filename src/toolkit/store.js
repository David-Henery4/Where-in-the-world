import { configureStore } from "@reduxjs/toolkit";
import overallReducer from "./features/overall/overallSlice";

export const store = configureStore({
    reducer: {
        overall: overallReducer
    },
})


