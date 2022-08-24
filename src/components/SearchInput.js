import React from 'react'
import {BsSearch} from "react-icons/bs"

const SearchInput = () => {
  return (
    <div className="search">
      
      <div className="search-icon">
      <BsSearch className="search-icon__icon" />
      </div>

      <input
        className="search__input"
        type="text"
        placeholder="Search for a country..."/>
    </div>
  );
}

export default SearchInput