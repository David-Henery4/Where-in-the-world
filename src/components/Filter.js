import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleFilterMenu, closeFilterMenu, filterCountries, getAllCountries } from '../toolkit/features/overall/overallSlice';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

// ADD CLEAR FILTER BTN TO THE OPTIONS!!!!!!

const Filter = () => {
  const [filterValue, setFilterValue] = useState("");
  const { isFilterMenuActive } = useSelector((store) => store.overall);
  const dispatch = useDispatch()
  //
  const handleFilterClick = () => {
    dispatch(toggleFilterMenu());
  };
  //
  const selectFilterValue = (e) => {
    if (!e.target.closest(".option")) return
    setFilterValue(e.target.innerText);
  };
  //
  useEffect(() => {
    dispatch(filterCountries(filterValue));
  }, [filterValue])
  //
  useEffect(() => {
    // trying to close when not clicking the filters
    // also set up close when going to single page.
    // document.body.addEventListener("click", (e) => {
    //   if (e.target.closest(".filter") || e.target.closest(".filter-options")){
    //     // dispatch(closeFilterMenu())
    //     // console.log("string")
    //   }
    //   // console.log("no")
    // })
    // return () => {
    //   document.body.removeEventListener("click", (e) => {
    //     console.log(e.target);
    //   });
    // }
  }, [])
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