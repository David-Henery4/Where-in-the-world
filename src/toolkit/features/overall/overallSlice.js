import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { v4 as uuid } from "uuid";

const initialState = {
    isDarkMode: false,
    isLoading: false,
    isFilterMenuActive: false,
    allCountriesData: [],
}



export const getAllCountries = createAsyncThunk("countries/getAllCountries", async (_, {rejectWithValue}) => {
    try {
        const res = await axios("https://restcountries.com/v3.1/all");
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


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
        [getAllCountries.pending]: (state) => {
            state.isLoading = true
        },
        [getAllCountries.fulfilled]: (state, {payload}) => {
            const allCountries = []
            payload.forEach((country) => {
                const newCountries = {
                    name: country.name,
                    id: uuid(),
                    borders: country.borders,
                    population: country.population,
                    capital: country.capital,
                    region: country.region,
                    subregion: country.subregion,
                    topLevelDomain: country.tld,
                    currencies: country.currencies,
                    languages: country.languages,
                    flags: country.flags,
                };
                allCountries.push(newCountries)
            })
            state.allCountriesData = allCountries
            state.isLoading = false;
        },
        [getAllCountries.rejected]: (state) => {
            state.isLoading = false
        },
    }
});

export const {toggleFilterMenu, closeFilterMenu} = overallSlice.actions

export default overallSlice.reducer

