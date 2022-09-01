import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toggleFilterMenu, filterCountries, getAllCountries, changeCountriesIndex } from '../toolkit/features/overall/overallSlice';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Filter = () => {
  const [filterValue, setFilterValue] = useState("");
  const { isFilterMenuActive} = useSelector((store) => store.overall);
  const dispatch = useDispatch()
  const location = useLocation()
  const country = location.pathname.includes("country");
  //
  const handleFilterClick = () => {
    dispatch(toggleFilterMenu());
  };
  //
  const selectFilterValue = (e) => {
    if (!e.target.closest(".option")) return
    setFilterValue(e.target.innerText);
    dispatch(changeCountriesIndex("reset"));
  };
  //
  useEffect(() => {
    if (country) dispatch(toggleFilterMenu())
    // eslint-disable-next-line
  }, [location.pathname])
  //
  useEffect(() => {
    dispatch(filterCountries(filterValue));
    // eslint-disable-next-line
  }, [filterValue])
  //
  return (
    <div className="filter" onClick={handleFilterClick}>
      <input
        className="filter__input"
        type="text"
        placeholder="Filter by Region"
        value={filterValue}
        readOnly
      />
      {isFilterMenuActive ? (
        <MdKeyboardArrowDown className="filter__icon" />
      ) : (
        <MdKeyboardArrowUp className="filter__icon" />
      )}
      {isFilterMenuActive && (
        <div className="filter-options" onClick={(e) => selectFilterValue(e)}>
          <div className="option">Africa</div>
          <div className="option">Americas</div>
          <div className="option">Asia</div>
          <div className="option">Europe</div>
          <div className="option">Oceania</div>
          <button
            className="filter-options__reset"
            onClick={() => {
              dispatch(getAllCountries())
              setFilterValue("")
              dispatch(changeCountriesIndex("reset"))
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default Filter