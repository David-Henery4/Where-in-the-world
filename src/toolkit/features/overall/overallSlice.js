import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import baseFetch from "../../../data/baseUrl";
import { fetchAllCountries, fetchSingleCountryData, fetchBordersFullName } from "../../../data";
import { v4 as uuid } from "uuid";

const initialState = {
    isDarkMode: false,
    isLoading: false,
    isFilterMenuActive: false,
    allCountriesData: [],
    singleCountryData: {},
    singleCountryBorders: [],
    searchedCountries: [],
}


export const getAllCountries = createAsyncThunk("countries/getAllCountries", fetchAllCountries)

export const getSingleCountryData = createAsyncThunk("countries/getSingleCountryData", fetchSingleCountryData)

export const getBordersFullName = createAsyncThunk("countries/getBordersFullName", fetchBordersFullName)

export const getCountriesBySearch = createAsyncThunk("countries/getCountriesBySearch", async (searchQuery, {rejectWithValue}) => {
    try {
        const res = await baseFetch(`name/${searchQuery}?fields=name,population,flags,region,capital`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});


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
                    population: country.population,
                    capital: country.capital,
                    region: country.region,
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
        //
        // Get Country by search
        //
        [getCountriesBySearch.pending]: (state) => {
            state.isLoading = true;
        },
        [getCountriesBySearch.fulfilled]: (state, {payload}) => {
            const allCountries = [];
            // console.log(payload)
            payload.forEach((country) => {
                const newCountries = {
                    name: country.name,
                    id: uuid(),
                    population: country.population,
                    capital: country.capital,
                    region: country.region,
                    flags: country.flags,
                };
                allCountries.push(newCountries);
            });
            state.allCountriesData = allCountries;
            state.isLoading = false;
        },
        [getCountriesBySearch.rejected]: (state, {payload}) => {
            state.isLoading = false
            console.log(payload)
        },
    }
});

export const {toggleFilterMenu, closeFilterMenu} = overallSlice.actions

export default overallSlice.reducer

