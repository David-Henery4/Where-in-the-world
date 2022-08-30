import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCountries, fetchSingleCountryData, fetchCountriesBySearch } from "../../../data";
import { v4 as uuid } from "uuid";

const initialState = {
    isDarkMode: false,
    isLoading: false,
    isFilterMenuActive: false,
    isFilterActive: false,
    allCountriesData: [],
    filteredCountriesData: [],
    singleCountryData: {},
    singleCountryBorders: [],
    searchedCountries: [],
}

export const getAllCountries = createAsyncThunk("countries/getAllCountries", fetchAllCountries)

export const getSingleCountryData = createAsyncThunk("countries/getSingleCountryData", fetchSingleCountryData)

export const getCountriesBySearch = createAsyncThunk("countries/getCountriesBySearch", fetchCountriesBySearch);

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
        filterCountries: (state, {payload}) => {
            if (payload){
                const copy = state.allCountriesData.slice()
                const filteredArray = copy.filter(c => c.region === payload)
                state.filteredCountriesData = filteredArray
                state.isFilterActive = true
            }
            //
            if (!payload){
                state.isFilterActive = false
            }
        }
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
                  borders: country.borders,
                  ccn3: country.ccn3,
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
            console.log(payload)
            state.isLoading = false
            const {
              flags,
              name,
              population,
              region,
              subregion,
              capital,
              tld,
              currencies,
              languages,
              ccn3,
            } = payload[0];
            const bordersInfo = payload.filter((_,i) => i > 0)
            // console.log(bordersInfo)
            state.singleCountryData = {
              flags,
              name,
              population,
              region,
              subregion,
              capital,
              tld,
              currencies,
              languages,
              bordersInfo,
              ccn3,
            };
        },
        [getSingleCountryData.rejected]: (state, {payload}) => {
            state.isLoading = false
            console.log(payload)
        },
        //
        // Get Country by search
        //
        [getCountriesBySearch.pending]: (state) => {
            state.isLoading = true;
        },
        [getCountriesBySearch.fulfilled]: (state, {payload}) => {
            const allCountries = [];
            payload.forEach((country) => {
                const newCountries = {
                  name: country.name,
                  id: uuid(),
                  population: country.population,
                  capital: country.capital,
                  region: country.region,
                  flags: country.flags,
                  borders: country.borders,
                  ccn3: country.ccn3,
                };
                allCountries.push(newCountries);
            });
            state.allCountriesData = allCountries;
            state.isLoading = false;
        },
        [getCountriesBySearch.rejected]: (state, {payload}) => {
            state.isLoading = false
            // console.log(payload)
        },
    }
});

export const {toggleFilterMenu, closeFilterMenu, filterCountries} = overallSlice.actions

export default overallSlice.reducer

