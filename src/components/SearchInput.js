import React, { useState } from 'react'
import {BsSearch} from "react-icons/bs"

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("")
  //
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log(searchValue)
  }
  //
  return (
    <div className="search">
      
      <div className="search-icon">
      <BsSearch className="search-icon__icon" />
      </div>
      
      <form onSubmit={(e) => handleSearchSubmit(e)}>
        <input
          className="search__input"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for a country..."/>
      </form>

    </div>
  );
}

export default SearchInput