import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import baseFetch from "../../../data/baseUrl";
import { v4 as uuid } from "uuid";

const initialState = {
    isDarkMode: false,
    isLoading: false,
    isFilterMenuActive: false,
    allCountriesData: [],
    singleCountryData: {},
    singleCountryBorders: []
}



export const getAllCountries = createAsyncThunk("countries/getAllCountries", async (_, {rejectWithValue}) => {
    try {
        const res = await baseFetch("all");
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const getSingleCountryData = createAsyncThunk("countries/getSingleCountryData", async(name, {rejectWithValue}) => {
    try {
        const res = await baseFetch(`name/${name}`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const getBordersFullName = createAsyncThunk("countries/getBordersFullName", async(names, {rejectWithValue}) => {
    try {
        const namesUrls = []
        names.forEach((n) => {
            const str = baseFetch(`alpha/${n}?fields=name`);
            namesUrls.push(str)
        })
        const res = await Promise.all(namesUrls)
        const data = res.map(res => res.data)
        return data.flat()
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
        //
        // ALL countries
        //
        [getAllCountries.pending]: (state) => {
            state.isLoading = true
        },
        [getAllCountries.fulfilled]: (state, {payload}) => {
            const allCountries = []
            // console.log(payload)
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
        //
        // single country
        //
        [getSingleCountryData.pending]: (state) => {
            state.isLoading = true
        },
        [getSingleCountryData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {
                flags,
                name,
                population,
                region,
                subregion,
                capital,
                borders,
                tld,
                currencies,
                languages,
            } = payload[0];
            state.singleCountryData = {
                flags,
                name,
                population,
                region,
                subregion,
                capital,
                borders,
                tld,
                currencies,
                languages,
            };
        },
        [getSingleCountryData.rejected]: (state) => {
            state.isLoading = false
        },
        //
        // Get Borders fullname (NEED TO DISPATCH)
        //
        [getBordersFullName.pending]: (state) => {
            state.isLoading = true
        },
        [getBordersFullName.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.singleCountryBorders = payload
        },
        [getBordersFullName.rejected]: (state) => {
            state.isLoading = false
        },
    }
});

export const {toggleFilterMenu, closeFilterMenu} = overallSlice.actions

export default overallSlice.reducer

