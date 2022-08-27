import React, { useEffect } from 'react'
import { CountryBox } from '../components'
import { tempCountryData } from '../dummyData/tempCountryData'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const CountriesWrap = () => {
  const { allCountriesData } = useSelector((store) => store.overall);
  const handleCountryClick = () => {
    // Have to use "useLocation" to check path to render the back btn & filter conditionally.
  }
  //
  return (
    <div className="countries">
      <div className='countries-wrap'>
        { allCountriesData.length > 0 &&
        allCountriesData.map((temp, i) => {
          // console.log(temp)
          return (
            <Link
              className="countries-link-style"
              to={`/country/${temp.name.official}`}
              key={temp.id}
            >
              <CountryBox {...temp} />;
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default CountriesWrap