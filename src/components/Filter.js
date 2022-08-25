import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleFilterMenu } from '../toolkit/features/overall/overallSlice';
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
    document.body.addEventListener("click", (e) => {
      if (e.target.closest(".filter") || e.target.closest(".filter-options")){
        console.log("yes")
      }
      // console.log("no")
    })
    return () => {
      document.body.removeEventListener("click", (e) => {
        console.log(e.target);
      });
    }
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
          <div className="option">North America</div>
          <div className="option">Asia</div>
          <div className="option">Europe</div>
          <div className="option">Oceania</div>
        </div>
      )}
    </div>
  );
}

export default Filter