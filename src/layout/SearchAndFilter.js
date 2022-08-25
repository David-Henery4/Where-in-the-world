import React, { useEffect, useState } from 'react'
import {SearchInput, Filter, BackBtn} from "../components"
import { useLocation, Link } from 'react-router-dom'

// BTN RENDERED ON THE PAGE CHANGE.

const SearchAndFilter = () => {
    const [filterActive, setFilterActive] = useState(true)
    let location = useLocation();
    const home = location.pathname === "/";
    const country = location.pathname === "/country-details";
    //
    useEffect(() => {
      if (home) setFilterActive(true);
      if (country) setFilterActive(false);
      // eslint-disable-next-line
    },[location.pathname])
    // 
    return (
        <div className='search-filter-container'>
            {filterActive ? 
            <>
                <SearchInput/> 
                <Filter/> 
            </> : 
            <Link to="/">
                <BackBtn/>
            </Link>
            }
        </div>
    )
}

export default SearchAndFilter