import React from 'react'
import {BsSearch} from "react-icons/bs"

const SearchInput = () => {
  return (
    <div className="search">
      <BsSearch className="search__icon" />
      <input
        className="search__input"
        type="text"
        placeholder="Search for a country..."/>
    </div>
  );
}

export default SearchInput