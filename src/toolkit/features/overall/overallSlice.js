import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: false,
    isLoading: false,
    isFilterMenuActive: false,
}

const overallSlice = createSlice({
    name: "overall",
    initialState,
    reducers: {
        toggleFilterMenu: (state) => {
            state.isFilterMenuActive = !state.isFilterMenuActive
        },
    },
    extraReducers: {
        
    }
});

export const {toggleFilterMenu} = overallSlice.actions

export default overallSlice.reducer

