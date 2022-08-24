import React from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Filter = () => {
  return (
    <div className="filter">
      <input
        className="filter__input"
        type="text"
        placeholder="Filter by Region"
        readOnly/>
      <MdKeyboardArrowDown className="filter__icon" />
      <div className="filter-options">
        <div>Africa</div>
        <div>America</div>
        <div>Asia</div>
        <div>Europe</div>
        <div>Oceania</div>
      </div>
    </div>
  );
}

export default Filter