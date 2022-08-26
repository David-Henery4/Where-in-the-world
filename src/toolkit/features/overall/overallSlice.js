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
        closeFilterMenu: (state) => {
            state.isFilterMenuActive = false
        },
    },
    extraReducers: {
        
    }
});

export const {toggleFilterMenu, closeFilterMenu} = overallSlice.actions

export default overallSlice.reducer

