import React, { useState } from 'react'
import {BsSearch} from "react-icons/bs"
import { getCountriesBySearch, getAllCountries } from '../toolkit/features/overall/overallSlice'
import { useDispatch } from 'react-redux/es/exports'

const SearchInput = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState("")
  //
  // const handleSearchSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(getCountriesBySearch(searchValue))
  // }
  //
  const handleSearch = (searchQuery) => {
    if (searchQuery === "") {
      dispatch(getAllCountries())
      console.log("All countries")
    }
    if (searchQuery){
      dispatch(getCountriesBySearch(searchQuery))
    }
  }
  //
  return (
    <div className="search">
      
      <div className="search-icon">
      <BsSearch className="search-icon__icon" />
      </div>
      
      <form onSubmit={(e) => {
        // handleSearchSubmit(e);
      }} className="search__form">
        <input
          className="search__input"
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
            handleSearch(e.target.value)
          }}
          placeholder="Search for a country..."/>
      </form>

    </div>
  );
}

export default SearchInput