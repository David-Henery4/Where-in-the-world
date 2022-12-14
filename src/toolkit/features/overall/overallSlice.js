import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
import {getTheme} from "../../../theme/getTheme";
import {
  fetchAllCountries,
  fetchSingleCountryData,
  fetchCountriesBySearch,
} from "../../../data";
import { v4 as uuid } from "uuid";



const initialState = {
  theme: getTheme(),
  isDarkMode: localStorage.getItem("theme-toggle") || false,
  isLoading: false,
  isFilterMenuActive: false,
  isFilterActive: false,
  countriesIndex: 0,
  allCountriesData: [],
  filteredCountriesData: [],
  singleCountryData: {},
  singleCountryBorders: [],
  searchedCountries: [],
};

export const getAllCountries = createAsyncThunk(
  "countries/getAllCountries",
  fetchAllCountries
);

export const getSingleCountryData = createAsyncThunk(
  "countries/getSingleCountryData",
  fetchSingleCountryData
);

export const getCountriesBySearch = createAsyncThunk(
  "countries/getCountriesBySearch",
  fetchCountriesBySearch
);

const overallSlice = createSlice({
  name: "overall",
  initialState,
  reducers: {
    setTheme: (state, {payload}) => {
    state.theme = payload
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
      localStorage.setItem("theme-toggle", state.isDarkMode);
    },
    toggleFilterMenu: (state) => {
      state.isFilterMenuActive = !state.isFilterMenuActive;
    },
    closeFilterMenu: (state) => {
      state.isFilterMenuActive = false;
    },
    changeCountriesIndex: (state, { payload }) => {
      if (payload === "inc") {
        state.countriesIndex = state.countriesIndex + 1;
      }
      if (payload === "reset") {
        state.countriesIndex = 0;
      }
    },
    filterCountries: (state, { payload }) => {
      if (payload) {
        const copy = state.allCountriesData.slice();
        const filteredArray = copy.filter((c) => c.region === payload);
        state.filteredCountriesData = filteredArray;
        state.isFilterActive = true;
      }
      //
      if (!payload) {
        state.isFilterActive = false;
      }
    },
  },
  extraReducers: {
    //
    // ALL countries
    //
    [getAllCountries.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCountries.fulfilled]: (state, { payload }) => {
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
    [getAllCountries.rejected]: (state, {payload}) => {
      state.isLoading = false;
      console.error(payload)
      toast.error(payload.message)
    },
    //
    // single country
    //
    [getSingleCountryData.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleCountryData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
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
      const bordersInfo = payload.filter((_, i) => i > 0);
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
    [getSingleCountryData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.error(payload)
      toast.error(payload.message);
    },
    //
    // Get Country by search
    //
    [getCountriesBySearch.pending]: (state) => {
      state.isLoading = true;
    },
    [getCountriesBySearch.fulfilled]: (state, { payload }) => {
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
    [getCountriesBySearch.rejected]: (state, { payload }) => {
      state.isLoading = false;
      // console.error(payload)
    },
  },
});

export const {
  toggleFilterMenu,
  closeFilterMenu,
  filterCountries,
  changeCountriesIndex,
  toggleDarkMode,
  setTheme
} = overallSlice.actions;

export default overallSlice.reducer;
